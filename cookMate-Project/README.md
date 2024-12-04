CookMate 🍳
Your Personalized Cooking Companion

Overview
CookMate is a modern recipe discovery and meal planning web application designed to make cooking accessible and enjoyable, especially for students or individuals with minimal cooking skills. Living away from home, such as in student ghettos, often presents challenges in preparing nutritious and diverse meals. CookMate bridges this gap by providing a user-friendly platform to explore recipes based on available ingredients, dietary preferences, and nutritional needs.

Key Features
Search Recipes by Ingredients: Enter ingredients you already have, and CookMate will suggest recipes you can make.
Dietary Preferences: Filter recipes to suit dietary needs such as Vegetarian, Vegan, Gluten-Free, or Ketogenic diets.
Step-by-Step Cooking Instructions: Each recipe comes with detailed steps to ensure a smooth cooking experience.
Error Handling: CookMate provides helpful messages if the search input is unclear, guiding users to refine their queries.
Responsive Design: Works seamlessly across desktop, tablet, and mobile devices.
Motivation
Many students living in shared accommodations or on tight budgets struggle with cooking. CookMate is crafted to:

Minimize food waste by utilizing available ingredients.
Encourage healthy eating habits with tailored recipes.
Simplify meal planning with quick and intuitive search options.
How It Works
Enter Ingredients: Input the ingredients you have in the search bar.
Choose a Diet (Optional): Select a dietary preference if applicable.
Find Recipes: CookMate fetches relevant recipes using the Spoonacular API.
Start Cooking: Follow the provided step-by-step instructions and enjoy your meal!
Tech Stack
Frontend: HTML, CSS (modern, responsive design)
Backend: JavaScript with API calls to Spoonacular's Recipe API
Deployment: Hosted on web servers with a load balancer for scalability and domain integration.
Installation and Setup
Prerequisites
A modern web browser.
API key from Spoonacular (Sign up here).
Steps
Clone the repository:
bash
Copy code
git clone https://github.com/your-username/cookmate.git
cd cookmate
Add your API key in the config.json file:
json
Copy code
{
    "API_KEY": "your_api_key_here"
}
Install dependencies (if applicable) and run a local development server:
bash
Copy code
npx http-server
Open the app in your browser at http://localhost:8080.
Deployment
Follow the steps for deploying the app on a web server with load balancing and domain integration as detailed here.

Features Highlight
Error Handling
If a user searches with invalid or irrelevant terms, the app provides suggestions and encourages refining the input, ensuring a smooth experience.

.gitignore for Security
Sensitive files like config.json (containing API keys) are excluded from the Git repository using a .gitignore file to prevent accidental exposure.

Demo
You can access the live version of CookMate at:
CookMate Online

Future Enhancements
User Authentication: Allow users to save favorite recipes and track meal plans.
Weekly Meal Planner: Automatic meal scheduling based on dietary goals.
Multi-Language Support: Extend accessibility to non-English speakers.
Credits
API: Spoonacular Recipe API
Icons: Flaticon
Fonts: Google Fonts