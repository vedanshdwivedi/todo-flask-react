from flask import request, jsonify, Blueprint
from service.service import GenService

gen_controller_endpoints = Blueprint("controller", __name__)

service = GenService()

@gen_controller_endpoints.route("/api", methods=["GET"])
def test_endpoint():
    return {"name": "Controller Registered"}