from flask import request, jsonify, Blueprint
from service.service import GenService

gen_controller_endpoints = Blueprint("controller", __name__)

service = GenService()

@gen_controller_endpoints.route("/api_1", methods=["GET"])
def test_endpoint():
    return {"name": "Controller Registered"}

@gen_controller_endpoints.route("/write", methods=["POST"])
def write():
    data = request.json["keyword"]
    resp = service.write_data(data)
    return jsonify(resp)


@gen_controller_endpoints.route("/delete", methods=["POST"])
def delete():
    data = int(request.json["id"])
    resp = service.delete_data(data)
    return jsonify(resp)
        


@gen_controller_endpoints.route("/api", methods=["GET"])
def read():
    data = service.read_data()
    print(data)
    return jsonify(data)