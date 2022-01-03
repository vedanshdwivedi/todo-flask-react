from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route("/", methods=["GET"])
def index():
    return {"name": "Flask Backend"}


@app.route("/api", methods=["GET"])
def test_endpoint():
    return {"name": "API"}



if __name__ == "__main__":
    app.run(port=5000, debug=True)