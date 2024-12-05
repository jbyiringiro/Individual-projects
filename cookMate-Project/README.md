CookMate

Your Personalized Cooking Companion

Overview

CookMate is a modern recipe discovery and meal planning web application designed to make cooking accessible and enjoyable, especially for students or individuals with minimal cooking skills. Living away from home, such as in student ghettos, often presents challenges in preparing nutritious and diverse meals. 
CookMate bridges this gap by providing a user-friendly platform to explore recipes based on available ingredients, dietary preferences, and nutritional needs.

Key Features

Search Recipes by Ingredients: Enter ingredients you already have, and CookMate will suggest recipes you can make.
Dietary Preferences: Filter recipes to suit dietary needs, such as Vegetarian, Vegan, Gluten-Free, or Ketogenic diets.
Step-by-Step Cooking Instructions: Each recipe has detailed steps to ensure a smooth cooking experience.
Error Handling: CookMate provides helpful messages if the search input is unclear, guiding users to refine their queries.
Responsive Design: Works seamlessly across desktop, tablet, and mobile devices.

Motivation

Many students living in shared accommodations or on tight budgets need help with cooking. 
CookMate is crafted to:

Minimize food waste by utilizing available ingredients.
Encourage healthy eating habits with tailored recipes.
Simplify meal planning with quick and intuitive search options.

How It Works

Enter Recipe: Input the recipe keyword (Meal you want to prepare)
Enter Ingredients: Input the ingredients you have in the search bar.
Choose a Diet (Optional): Select a dietary preference if applicable.
Find Recipes: CookMate fetches relevant recipes using the Spoonacular API.
Start Cooking: Follow the provided step-by-step instructions and enjoy your meal!

Development Stack

Frontend: HTML, CSS
Backend: JavaScript with API calls to Spoonacular's Recipe API
Deployment: Hosted on web servers(web-01 and web-02) with a load balancer for scalability and domain integration.

Installation and Setup

Running Locally
Prerequisites
Install Git.
Clone this repository:
git clone <repository-url>
cd <repository-name>
Add a config.json file with API keys:
	{
 	   "API_KEY": "your_api_key_here"
}
Open index.html in your browser or use a live server.
Deployment Instructions
Deploying to Servers
Copy Files to Servers:
Upload app files to /var/www/html on web-01 and web-02:
scp -r * user@web-01:/var/www/html/
scp -r * user@web-02:/var/www/html/
Set Up Nginx:
Configure Nginx on each server to serve the app:
server {
    listen 80;
    server_name localhost;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
Restart Nginx:
sudo systemctl restart nginx
Configuring Load Balancer with Nginx
Install Nginx on the load balancer server:
sudo apt update
sudo apt install nginx
Edit Nginx Configuration:
Update /etc/nginx/sites-available/default with:
upstream backend_servers {
    server web-01;
    server web-02;
}

server {
    listen 80;
    server_name load-balancer;

    location / {
        proxy_pass http://backend_servers;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
Restart Nginx:
sudo systemctl restart nginx
Test Load Balancer:
Access the load balancer's IP to confirm traffic alternates between web-01 and web-02.
Challenges and Solutions
1. Nginx Configuration Errors
Problem: Nginx was not reading the location of my files
Solution: Edited the Nginx configuration file and changed the directory.

Demo

You can access the live version of CookMate at:
Website: web-01
Web-02
Demo Video explaining how it works

Future Enhancements

User Authentication: Allow users to save favorite recipes and track meal plans.
Weekly Meal Planner: Automatic meal scheduling based on dietary goals.
Multi-Language Support: Extend accessibility to non-English speakers.

Credits

API: Spoonacular Recipe API
Fonts: Google Fonts
Load balancing: Nginx


[CookMate.pdf](https://github.com/user-attachments/files/18024518/CookMate.pdf)
