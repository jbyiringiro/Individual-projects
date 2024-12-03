let API_KEY;

// Load API key from config.json
fetch("config.json")
  .then(response => {
    if (!response.ok) throw new Error("Failed to load config.json");
    return response.json();
  })
  .then(config => {
    API_KEY = config.API_KEY;
  })
  .catch(error => {
    console.error("Error loading API key:", error);
    alert("Failed to load API key. Check your config.json file.");
  });
  // const API_KEY = "e48466c5712f4189ae7a70fdf5fe648a";
  // const BASE_URL = "https://api.spoonacular.com/recipes/complexSearch";
document.getElementById("search-btn").addEventListener("click", () => {
  const query = document.getElementById("query").value.trim();
  const ingredients = document.getElementById("ingredients").value.trim();
  const diet = document.getElementById("diet").value;

  if (!query && !ingredients) {
    displayError("Please enter at least a keyword or some ingredients.");
    return;
  }

  searchRecipes(query, ingredients, diet);
});

function searchRecipes(query, ingredients, diet) {
  const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&includeIngredients=${ingredients}&diet=${diet}&number=10&apiKey=${API_KEY}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.results.length === 0) {
        displayError("No recipes found. Try different keywords or ingredients.");
      } else {
        displayRecipes(data.results);
      }
    })
    .catch(error => {
      displayError("An error occurred while fetching recipes. Please try again later.");
      console.error("Error fetching recipes:", error);
    });
}

function displayRecipes(recipes) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  recipes.forEach(recipe => {
    const recipeDiv = document.createElement("div");
    recipeDiv.className = "recipe";
    recipeDiv.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}" />
      <h3>${recipe.title}</h3>
      <a href="https://spoonacular.com/recipes/${recipe.title}-${recipe.id}" target="_blank">View Recipe</a>
    `;
    resultsDiv.appendChild(recipeDiv);
  });
}

function displayError(message) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `<p class="error">${message}</p>`;
}
