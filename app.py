from flask import Flask, jsonify, request

app = Flask(__name__)

# Sample user data
users = {
    "1": {"name": "John Doe", "email": "john@example.com", "age": 30},
    "2": {"name": "Jane Smith", "email": "jane@example.com", "age": 25},
    # Add more users as needed
}

@app.route('/user/<user_id>', methods=['GET'])
def get_user(user_id):
    user = users.get(user_id)
    if user:
        return jsonify(user)
    else:
        return jsonify({"error": "User not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)
