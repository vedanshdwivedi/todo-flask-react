from flask import request, jsonify, Blueprint
from service.service import GenService

gen_controller_endpoints = Blueprint("controller", __name__)

service = GenService()

@gen_controller_endpoints.route("/api_1", methods=["GET"])
def test_endpoint():
    return {"name": "Controller Registered"}

@gen_controller_endpoints.route("/write", methods=["GET"])
def write(data: str):
    data = request.json["keyword"]
    resp = service.write_data(data)
    return jsonify(resp)
        


@gen_controller_endpoints.route("/api", methods=["GET"])
def read():
    return jsonify(service.read_data())