# Roadie
HackMIT 2023

<img src="https://github.com/danielgao20/Roadie/blob/main/static/images/roadie.png" alt="Roadie Landing Page" width="500">

## Inspiration

We decided to create Roadie with a profound purpose rooted in our team's diverse background encompassing music, computer science, business, operations planning, and a shared love of indie rock. Our collective mission was clear: to craft a service to democratize and empower independent "indie" musicians.

In the world of indie music, these immensely talented artists face a unique and daunting challenge – they must wear multiple hats. To pursue their passion and share their art with the world, a musician must not only excel in their craft but also play the roles of accountant, merchandise salesman, and tour planner. The weight of these responsibilities can become an overwhelming burden, detracting from what matters most – their music. Our heartfelt desire is to alleviate this burden, allowing artists to center their focus on their craft and get their show on the road.

In the ever-changing music industry, technology has transformed indie music. Social media and streaming have opened doors for indie artists. Today, a microphone and a computer can launch a music career. While online platforms offer global exposure, streaming and royalties alone are not enough for indie artists to in terms of income. Live performances are now crucial for indie musicians' financial survival.

Our goal is simple: to simplify the arduous process of touring for independent musicians by eliminating the need for intermediaries such as tour managers and booking agents. By doing so, we aim to enhance artists' financial sustainability, bolstering their bottom line and ultimately enabling them to continue doing what they love most: creating music that resonates with audiences far and wide. At its core, Roadie is driven by a profound love for music and the passionate artists who create it.

## What it does

Roadie offers a comprehensive suite of services to indie artists, including: 
* Tour Routing / Optimization: Finding the most cost-effective travel options for artists. Venue
* Matching: Matching artists with venues that align with their Spotify profiles.
* Data-Driven Insights: Utilizing data analytics to optimize tour planning for cost-efficiency and time optimization. 
With Roadie, artists can easily plan their tour by entering a list of target cities. From this, we give them the most optimal tour route, considering time and money, optimizing their time, and improving their bottom line. 

Roadie stands out as the first platform directly catering to indie artists in tour planning. Existing tour management software primarily targets tour managers and provides a different level of direct access and cost reduction for artists. We offer direct access and cost savings that were previously out of reach for artists, putting their tour planning needs front and center.

## How we built it

Html, Css, Python, Beautiful Soup, Pandas, Flask, Selenium, Javascript, Figma, Spotify APIi, GPT 3.5

Our mission was to solve the “Traveling Salesman Problem”, a transportation optimization problem, for artists, a task often marked by complexity. To accommodate the touring preferences of smaller indie artists, limiting the number of cities to a maximum of 10 is prudent. We implemented a swift brute-force search algorithm for this scenario, swiftly delivering optimal solutions. Should the need arise for more extensive tours, we ventured into the realm of heuristic and approximation algorithms, notably considering Christofides' Algorithm for transportation optimization.

Our choice to define edge weights based on flight prices was strategic, recognizing economics's pivotal role in an artist's touring decisions. We navigated the challenges of integrating flight price APIs, acknowledging the inherent complexity in handling such data.

Curating a comprehensive database of concert venues across the United States was an exhaustive task. Surprisingly, existing datasets fell short of our needs, compelling us to scour the web for a suitable source. Harnessing the tenacity of our team and power of Selenium, 
, we scraped over 300 subpages to extract invaluable data, meticulously cataloging each venue's name, address, and capacity. The result was a meticulously sorted dataset, faithfully serving our vision of optimizing concert tours for artists.

## Challenges we ran into

We encountered several challenges during our project:

Working with Flight Price APIs
* Integrating and effectively utilizing flight price APIs presented difficulties in terms of data retrieval and processing.
Setting Up the Basic Web Page
* The initial setup of our web page, which involved taking in Spotify links and location data and implementing the necessary HTML, JavaScript, and CSS, proved to be a complex task. 
Web Scraping Spotify Data: 
* Scraping Spotify URLs to extract artist names and monthly listeners required specialized knowledge and skills in web scraping. 
Scraping Venue Data 
* Collecting data from 6000 venues, including addresses and names, through web scraping was a time-consuming and technically demanding process. 
Learning JavaScript: 
* We had to invest time and effort into learning JavaScript to build the algorithm needed for our project, which was a significant learning curve. 
Optimization Problem: 
* Determining the most efficient approach to solving our optimization problem posed a unique challenge, requiring careful planning and problem-solving. 
Overcoming these challenges required dedication, teamwork, and a commitment to expanding our technical expertise.

Lack of GPT Credit 
* We wrote functional code to integrate an AI Chatbot into our service to help streamline the functionality and help users. Unfortunately we ran out of GPT Credit and could not implement this into our project. 


## Accomplishments that we're proud of

1. Innovative Data Solution
We are proud of our ability to devise a novel solution to obtain monthly data from Spotify users when it was not readily available through the API. This innovative approach has empowered us to provide more prosperous and more insightful recommendations to our users, enhancing their overall experience.

2. Front-End Development
Prior to this project, our team had no experience with front end web development. While it took hard work, we take pride in our platform's user-friendly, visually appealing, and responsive design, which has garnered positive feedback and improved user engagement.

3. Resourceful Problem Solving
When faced with challenges in obtaining data from flight APIs, we showcased our resourcefulness by finding effective workarounds. This adaptability and problem-solving mindset have enabled us to provide comprehensive travel information to our users, even when traditional data sources pose limitations.

4. Creative Ideation and Efficient Operations
Our ability to ideate and organize operations efficiently is another source of pride. We have cultivated a culture of innovation and creativity within our team, allowing us to continually refine our product and work quickly.

5. Collaborative Teamwork
Teamwork is at the core of our success. Our diverse and talented team members collaborate seamlessly to tackle complex challenges, share knowledge, and support one another. Our teamwork formed an environment where innovative ideas flourish and each team member's unique strengths contribute to our collective success.


## What we learned

Rapid Problem-Solving
* We honed our ability to quickly analyze and solve complex problems under time constraints, a crucial skill for agile development.
 JavaScript Mastery
* We sharpened our JavaScript skills, enabling us to create dynamic and interactive web applications.
 Web Scraping Proficiency
* We learned efficient web scraping techniques, facilitating data collection from online sources.
 Flask Server Setup
* Setting up and managing Flask servers became second nature to us, ensuring stable and responsive web applications.
Operations Management
* We improved our operations management capabilities, enhancing efficiency and cost-effectiveness.
Music Industry Insights
* We delved into the music industry, gaining valuable background knowledge that informs our data-driven recommendations and artist-venue matching.
These newfound skills and knowledge empower our team to excel in future projects and contribute to our ongoing growth and success.


## What's next for Roadie

To further enhance the user experience for Roadie, we have several exciting next steps in the pipeline:

1. Leveraging Data-Driven Insights: Besides artists picking their tour locations, We are harnessing the power of data-driven insights from streaming services. To make informed decisions about which cities and artists should be included in their tours 

2. Genre-Based Venue Matching: Currently, our venue matching is based on the size of the artists. We aim to use Spotify data to identify musical genres and match them with venues that best suit those genres. For instance, we can tailor our recommendations so that a small country artist with a predominantly male fan base is connected with intimate venues like a pub. This process involves a deep dive into historical booking data for each venue, allowing us to match our users' profiles with past artists who share similar characteristics.

3. Algorithm Refinement: Our commitment to improvement extends to further optimizing our algorithm. This means striving for lower prices and minimizing the time artists spend on the road. We're constantly fine-tuning our algorithms to provide the most efficient and cost-effective touring options.

4. Integrated Accommodation Options: We also aim to incorporate hotel and Airbnb options into our platform. This feature will assist artists in selecting their accommodations while on tour, ensuring they have a comfortable and convenient place to stay.

At Roadie, we're dedicated to elevating the touring experience for both artists and fans, and these upcoming enhancements reflect our ongoing commitment to achieving that goal.
