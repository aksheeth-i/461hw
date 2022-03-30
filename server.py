from flask import Flask, jsonify

flask_app = Flask(__name__, static_folder='./frontend/build', static_url_path='/')

@flask_app.route('/name/Aksheeth')
def lastName():
    return jsonify(lastName = 'Ilamparithi')

@flask_app.route('/')
def index():
    return flask_app.send_static_file('index.html')

if __name__ == "__main__":
    flask_app.run()
