from selenium import webdriver
from selenium.webdriver.common.by import By
# from selenium.webdriver.support.ui import WebDriverWait
# from selenium.webdriver.support import expected_conditions as EC
import pandas as pd


def scrape_venues():
    driver = webdriver.Chrome()

    start_url = 'https://theconcertdatabase.com/venues'

    venues = []
    page = 0

    while True:

        driver.get(f'{start_url}?page={page}')

        name = driver.find_element(By.CSS_SELECTOR,'td:nth-child(1) a').text
        # print(name)
        address = driver.find_element(By.CSS_SELECTOR, 'td:nth-child(2)').text
        city = driver.find_element(By.CSS_SELECTOR, 'td:nth-child(3)').text
        region = driver.find_element(By.CSS_SELECTOR, 'td:nth-child(4)').text
        country = driver.find_element(By.CSS_SELECTOR, 'td:nth-child(5)').text
        venue = {
            'Name': name,
            'Address': address,
            'City': city,
            'Region': region,
            'Country': country,
        }

        page += 1

        if page > 303:
            break

    driver.quit()

    df = pd.DataFrame(venues)
    print(df.head())
    df.to_csv('venues.csv', index=False)


if __name__ == '__main__':
    scrape_venues()

