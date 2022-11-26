from flask import Flask, request, jsonify, abort
from model import Users, Products, ProductRequest, db
from os import urandom

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


# creating database tables
@app.before_first_request()
def create_tables():
    db.create_all()


# registration route
@app.route("/registration", methods=["POST"])
def registration_route():
    if request.method == "POST":
        data = request.get_json()
        email = data['email']
        password = Users.set_password(data['password'])
        location = data['location']
        role = data['role']
        phone_number = data['phone_number']

        check_user = Users.query.filter_by(email=email).first()

        if check_user is not None:
            return jsonify({"success": False, "message": "User Exists"})
        else:
            reg_user = Users(email=email, password=password, location=location, role=role, phone_number=phone_number)
            db.session.add(reg_user)
            db.commit()

            return jsonify({"success": True, "message": "User Registered"})


# login route
@app.route("/login", methods=["POST"])
def login_route():
    if request.method == "POST":
        data = request.get_json()
        email = data["email"]
        password = data["password"]

        check_user = Users.query.filter_by(email=email).first()

        if check_user is not None:
            password = Users.check_hash(password)


