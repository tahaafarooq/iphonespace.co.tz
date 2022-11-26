from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()


class Users(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(80), unique=True)
    password = db.Column(db.String(80))
    role = db.Column(db.String())
    location = db.Column(db.String())
    phone_number = db.Column(db.String(), unique=True)

    def set_hash(self, hash):
        self.password = generate_password_hash(hash, "sha256")

    def check_hash(self, hash):
        return check_password_hash(self.password, hash)

    def __init(self, email, password, role, location, phone_number):
        self.email = email
        self.password = password
        self.role = role
        self.location = location
        self.phone_number = phone_number

    def __repr__(self):
        return f"{self.email}:{self.password}:{self.role}:{self.location}:{self.phone_number}"


class Products(db.Model):
    __tablename__ = "products"

    id = db.Column(db.Integer, primary_key=True)
    product_name = db.Column(db.String(), unique=True)
    product_seller = db.Column(db.String())
    product_category = db.Column(db.String())
    product_price = db.Column(db.String())
    seller_location = db.Column(db.String())

    def __init__(self, product_name, product_seller, product_category, product_price, seller_location):
        self.product_name = product_name
        self.product_seller = product_seller
        self.product_category = product_category
        self.product_price = product_price
        self.seller_location = seller_location

    def __repr__(self):
        return f"{self.product_name}:{self.product_name}:{self.product_category}:{self.product_price}:{self.seller_location}"


class ProductRequest(db.Model):
    __tablename__ = "product_requests"

    id = db.Column(db.Integer, primary_key=True)
    request_msg = db.Column(db.String())
    user = db.Column(db.String())
    time = db.Column(db.String())

    def __init__(self, request_msg, user, time):
        self.request_msg = request_msg
        self.user = user
        self.time = time

    def __repr__(self):
        return f"{self.request_msg}:{self.user}:{self.time}"

