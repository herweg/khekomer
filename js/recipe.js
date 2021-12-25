const TITLE = document.getElementById("recipe__title");
const DESCRIPTION = document.getElementById("recipe__description");
const PROPERTIES = document.getElementById("recipe__properties");
const INGREDIENTS = document.getElementById("recipe__ingredients");
const INSTRUCTIONS = document.getElementById("recipe__instructions");

var recipe = {};

document.addEventListener('DOMContentLoaded', function() {
    recipe = sessionStorage.getItem("recipe");
    parsedRecipe = JSON.parse(recipe);
    console.log(parsedRecipe);
    recipeInfo = parsedRecipe.recipes[0]

    TITLE.textContent = recipeInfo.title;
    DESCRIPTION.textContent = recipeInfo.summary;
    PROPERTIES.textContent = recipeInfo.vegan;
    INGREDIENTS.textContent = recipeInfo.extendedIngredients;
    INSTRUCTIONS.textContent = recipeInfo.analyzedInstructions;
});

