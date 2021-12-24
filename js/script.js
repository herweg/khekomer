// Spoonacular api key: da2c4227946040d386d435fdc069b601
const spoonacularkey = "?apiKey=da2c4227946040d386d435fdc069b601"
var askPropertiesRecipe = {};
var askIngredientsRecipe = {};
var askRandomRecipe = "https://api.spoonacular.com/recipes/random";
var recipe = {};

async function getRecipe(){
    let response = await fetch(askRandomRecipe+spoonacularkey);
    recipe = await response.json();
    console.log(recipe);
};

//document.getElementById("BTNrandomRecipe").addEventListener("click", getRecipe());
