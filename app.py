from flask import Flask, request, json, session, redirect

app = Flask(__name__, static_url_path='', static_folder='public')

@app.route("/api/upload")
def upload():
  return '~'
# (name of item, state, price)

@app.route('/')
def index():
	return app.send_static_file('index.html')

if __name__ == "__main__":
	app.run()
