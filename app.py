from flask import Flask, request, json, session, redirect, jsonify
from werkzeug.utils import secure_filename
import barcode
import os
import uuid

app = Flask(__name__, static_url_path='', static_folder='public')

@app.route("/api/upload", methods = ['POST'])
def upload():
	filestorage = request.files.to_dict()['files[0]']
	safename = uuid.uuid4().hex+''+secure_filename(filestorage.filename)
	filestorage.save(os.path.join('./temppic', safename))
	code = barcode.getcode('./temppic/%s' % safename)
	if (code):
		info = barcode.getinfo(code)
		return jsonify(
			success=True,
			info=info
    )
	else:
		return jsonify(
			success=False
    )

@app.route('/')
def index():
	return app.send_static_file('index.html')

if __name__ == "__main__":
	app.run()
