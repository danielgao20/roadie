# get_venues.py

import csv
import random

def getVenues(city):

  venues = []

  # Read in venue data from CSV 
  with open('venues.csv') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
      venues.append(row)

  # Filter venues by city
  venues = [v for v in venues if v['city'] == city]

  # Select random venues
  num_venues = random.randint(1, 6)
  venues = random.sample(venues, num_venues)

  # Add random capacity 
  for venue in venues:
    venue['capacity'] = random.randint(500, 1500)

  return venues