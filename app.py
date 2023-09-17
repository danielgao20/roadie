from flask import Flask, render_template, request
from artist_scrape import get_spotify_artist_page, extract_artist_info

app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template("index.html")

@app.route("/results")
def results():
    artist_url = request.args.get('artistLink', '')
    print(artist_url)
    html = get_spotify_artist_page(artist_url)
    artist_name, monthly_listeners = extract_artist_info(html)
    print(artist_name)
    print(monthly_listeners)
    locations = request.args.get('locations', '')
    print(locations)
    return render_template("results.html", artist_name=artist_name, monthly_listeners=monthly_listeners, locations=locations)

app.run(debug=True, port=8000)