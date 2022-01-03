from flask import Flask, jsonify, request
from controller.controller import gen_controller_endpoints

app = Flask(__name__)
app.register_blueprint(gen_controller_endpoints)

@app.route("/", methods=["GET"])
def index():
    return {"name": "Flask Backend"}






if __name__ == "__main__":
    app.run(port=5000, debug=True)