const TITLE = document.getElementById("recipe__title");
const DESCRIPTION = document.getElementById("recipe__description");
const PROPERTIES = document.getElementById("recipe__properties");
const INGREDIENTS = document.getElementById("recipe__ingredients");
const INSTRUCTIONS = document.getElementById("recipe__instructions");

var recipe = {};
var recipeInfo = {};

recipe = sessionStorage.getItem("recipe");
parsedRecipe = JSON.parse(recipe);
console.log(parsedRecipe);
recipeInfo = parsedRecipe.recipes[0]

TITLE.textContent += recipeInfo.title;
DESCRIPTION.textContent = recipeInfo.summary;
PROPERTIES.textContent = recipeInfo.vegan;
INSTRUCTIONS.textContent = recipeInfo.analyzedInstructions;

// Ingredients

var ingredients = recipeInfo.extendedIngredients;
var ingredientsInfo = [];

function getIngredients(ingred) {
    for (let i = 0; i < ingred.length; i++) {
        const ingredient = ingred[i];
        ingredientsInfo.push(ingredient.originalString);
    }
};

getIngredients(ingredients);

INGREDIENTS.textContent = ingredientsInfo;

// recipeInfo.extendedIngredients[i]
// ingredientsInfo.push([ingredient.name,ingredient.amount,ingredient.nameClean,ingredient.originalName,ingredient.originalString])
// [amount,id,image,name,nameClean,originalName,originalString],measures[metric][amount,unitShort]