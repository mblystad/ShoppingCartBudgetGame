from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

cart = []

inventory = {
    "apple": 0.99,
    "banana": 0.59,
    "bread": 2.49,
    "milk": 1.99
}

@app.route("/inventory", methods=["GET"])
def get_inventory():
    return jsonify(inventory)

@app.route("/cart", methods=["GET"])
def get_cart():
    total = sum(item["price"] for item in cart)
    return jsonify({"items": cart, "total": total})

@app.route("/cart", methods=["POST"])
def add_to_cart():
    data = request.get_json()
    name = data.get("name")
    price = data.get("price")
    if name and isinstance(price, (int, float)):
        cart.append({"name": name, "price": price})
        return jsonify({"message": f"Added {name} to cart."}), 200
    return jsonify({"error": "Invalid data"}), 400

@app.route("/cart", methods=["DELETE"])
def clear_cart():
    cart.clear()
    return jsonify({"message": "Cart cleared."}), 200

if __name__ == "__main__":
    app.run(debug=True)
