from flask import Flask, request, json, session, redirect

#import pymysql.cursors

# conn = pymysql.connect(host='localhost',
# 						port=8889,
# 						user='root',
# 						password='root',
# 						db='PriCoSha',
# 						charset='utf8mb4',
# 						cursorclass=pymysql.cursors.DictCursor)

app = Flask(__name__)
app.secret_key = 'secret'

@app.route("/upload")
def process_code:

    return (name of item, state, price)

@app.route("/")
def main():
	if session.get('user'):
		user = session.get('user')
		return render_template('index.html', message="User {} is still signed in, click Log In to continue the session or to reach the Log Out button".format(user))
	else:
		return render_template('index.html')

if __name__ == "__main__":
	app.run()
