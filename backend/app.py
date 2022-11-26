from flask import Flask, request, jsonify, abort, make_response
from model import Users, Products, ProductRequest, db
from werkzeug.security import generate_password_hash
from datetime import datetime, timedelta
from functools import wraps
from os import urandom

import uuid
import json
import jwt

app = Flask(__name__)
app.secret_key = urandom(12)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['UPLOAD_FOLDER'] = 'static/uploads/'

DATABASE = {
    'drivername': 'sqlite',
    'database': 'database.db'
}

db.init_app(app)


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        # JWT is passed in the request headers
        if "x-access-token" in request.headers:
            token = request.headers["x-access-token"]
        # return 401 if token is not passed
        if not token:
            return jsonify({'success': False, 'message': 'Token is missing'})

        try:
            data = jwt.decode(token, app.secret_key)
            current_user = Users.query.filter_by(uuid=data['uuid']).first()
        except Exception:
            return jsonify({'success':False, 'message': 'Token is invalid'}), 401
        # return the current logged in users context to the routes
        return f(current_user, *args, **kwargs)

    return decorated


# creating database tables
@app.before_first_request
def create_tables():
    db.create_all()


# registration route
@app.route("/register", methods=["POST"])
def registration_route():
    if request.method == "POST":
        data = request.get_json()
        email = data['email']
        password = generate_password_hash(data['password'], 'sha256')
        location = data['location']
        role = data['role']
        phone_number = data['phone_number']
        did = str(uuid.uuid4())

        check_user = Users.query.filter_by(email=email).first()

        if check_user is not None:
            return jsonify({"success": False, "message": "User Exists"})
        else:
            reg_user = Users(email=email, password=password, location=location, role=role, phone_number=phone_number, duuid=did)
            db.session.add(reg_user)
            db.session.commit()

            return jsonify({"success": True, "message": "User Registered successful!"})


# login route
@app.route("/login", methods=["POST"])
def login_route():
    if request.method == "POST":
        data = request.get_json()
        email = data["email"]
        password = data["password"]

        check_user = Users.query.filter_by(email=email).first()

        if check_user is not None and check_user.check_hash(password) and check_user.role == "seller":
            token = jwt.encode({
                "UUID": check_user.duuid,
                "role": check_user.role,
                "exp": datetime.utcnow() + timedelta(minutes=30)
            }, app.secret_key)

            return jsonify({'success': True, 'token': token.decode('utf-8')}), 201

        elif check_user is not None and check_user.check_hash(password) and check_user.role == "buyer":
            token = jwt.encode({
                "UUID": check_user.duuid,
                "role": check_user.role,
                "exp": datetime.utcnow() + timedelta(minutes=30)
            }, app.secret_key)

            return jsonify({'success': True, 'token': token.decode('utf-8')}), 201
        else:
            return jsonify({'success': False, 'message': 'Could not verify!'}), 401


# product information route
@app.route("/product/<name>", methods=["GET"])
def get_product(name):
    check_product = Products.query.filter_by(product_name=name).first()

    if check_product is not None:
        data = json.dumps({
            "name": name,
            "seller": check_product.product_seller,
            "category": check_product.product_category,
            "price": check_product.product_price,
            "description": check_product.product_description,
            "location": check_product.seller_location
        })

        return data, 202

    else:
        return jsonify({"success": False, "message": "Unable To Fetch Product"})


# list products route
@app.route("/products/list", methods=["GET"])
def list_products():
    products = Products.query.all()

    return jsonify({"products": products})


# request a product route
@app.route("/request/product", methods=["POST"])
def request_product():
    if request.method == "POST":
        data = request.get_json()
        token = jwt.decode(data['token'], app.secret_key)
        user = Users.query.filter_by(duuid=token).first()
        user = user.email
        request_message = data['message']
        time = datetime.now()

        update = ProductRequest(request_msg=request_message, user=user, time=time)

        db.session.add(update)
        db.session.commit()

        return jsonify({"success": True, "message": "Request Sent Successful!"}), 203


@app.route("/")
def index():
    return "WELCOME"


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)
