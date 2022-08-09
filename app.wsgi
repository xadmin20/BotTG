import os
import sys
sys.path.append('/home/a/anitads/fl/public_html/myenv/lib/python3.6/site-packages/')
#import fl_market
from flask import Flask, render_template, url_for, request, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import sqlite3
import requests

import os, json

path_linux = "/home/a/anitads/fl/public_html/static/products"
path_win = "static/products"


class Product():
    def search_products(self):
        product_list = []
        if sys.platform == "win32":
            path = path_win
            print("Win")
        else:
            path = path_linux
            print("Linux")
        for i in os.listdir(path):
            print(i)
            with open(f"{path}/{i}/info.json", "r", encoding="utf-8") as file:
                d = json.load(file)
            product_list.append(d)
        return product_list



app = Flask(__name__)
application = app
app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///blog.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


class Article(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    intro = db.Column(db.String(300), nullable=False)
    text = db.Column(db.Text, nullable=False)
    date = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return "<Article %r>" % self.id



@app.route("/")
@app.route("/home")
def index():
    product = Product().search_products()
    return render_template("index.html", product=product)


@app.route('/ip')
def get_tasks():
    return request.access_route, request.remote_addr


@app.route("/about")
def about() -> "html":
    return render_template("about.html")


@app.route("/posts")
def posts() -> "html":
    articles = Article.query.order_by(Article.date.desc()).all()
    return render_template("posts.html", articles=articles)


@app.route("/posts/<int:id>")
def posts_detail(id) -> "html":
    article = Article.query.get(id)
    return render_template("post_detail.html", article=article)


@app.route("/posts/<int:id>/del")
def posts_delete(id) -> "html":
    article = Article.query.get_or_404(id)

    try:
        db.session.delete(article)
        db.session.commit()
        return redirect("/posts")
    except:
        return "При удалении статьи произошла ошибка"


@app.route("/create_article", methods=["POST", "GET"])
def create_article() -> "html":
    if request.method == "POST":
        title = request.form["title"]
        intro = request.form["intro"]
        text = request.form["text"]
        article = Article(title=title, intro=intro, text=text)
        try:
            db.session.add(article)
            db.session.commit()
            return redirect("/posts")
        except:
            return "При добавлении статьи произошла ошибка"
    else:
        return render_template("create_article.html")


@app.route("/posts/<int:id>/update", methods=["POST", "GET"])
def post_update(id) -> "html":
    article = Article.query.get(id)
    if request.method == "POST":
        article.title = request.form["title"]
        article.intro = request.form["intro"]
        article.text = request.form["text"]
        try:
            db.session.commit()
            return redirect("/posts")
        except:
            return "При редактировании статьи произошла ошибка"
    else:

        return render_template("post_update.html", article=article)




if __name__ == "__main__":
    app.run(debug=True)

