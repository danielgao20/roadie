import requests
from bs4 import BeautifulSoup

# sample URL to scrape
# url = "https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d"

def get_spotify_artist_page(url):
    response = requests.get(url)
    if response.status_code == 200:
        return response.text
    else:
        print("Failed to retrieve the page.")
        return None

def extract_artist_info(html):
    soup = BeautifulSoup(html, 'html.parser')

    # Find the artist name
    artist_name = soup.find('meta', property='og:title')['content']

    # Find the monthly listeners
    monthly_listeners = soup.find('meta', property='og:description')['content'].split('·')[1].strip()

    return artist_name, monthly_listeners

if __name__ == "__main__":
    artist_url = input("Enter the Spotify artist URL: ")
    html = get_spotify_artist_page(artist_url)
    if html:
        artist_name, monthly_listeners = extract_artist_info(html)
        print(f"Artist Name: {artist_name}")
        print(f"Monthly Listeners: {monthly_listeners}")
