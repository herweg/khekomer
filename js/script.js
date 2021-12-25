const SPOONACULAR_KEY = "?apiKey=da2c4227946040d386d435fdc069b601"
const ASK_PROPERTIES_RECIPE = "https://api.spoonacular.com/recipes/findByNutrients";
const ASK_INGREDIENTS_RECIPE = "https://api.spoonacular.com/recipes/findByIngredients"; //params: &ingredients, &ignorePantry=true
const ASK_RANDOM_RECIPE = "https://api.spoonacular.com/recipes/random"; //params: &intolerances, &diet, &meal type (&type)

var recipe = {};

var reqIntolerances = [];
var reqDiet = [];
var reqType = [];
var reqParams = "&intolerances="+reqIntolerances+"&diet="+reqDiet+"&type="+reqType;

async function getRecipe(reqRecipe, reqParameters){
    let response = await fetch(reqRecipe+SPOONACULAR_KEY+reqParameters);
    recipe = await response.json();

    let recipeStored = JSON.stringify(recipe);
    sessionStorage.setItem("recipe",recipeStored);

    console.log(recipe);

    window.location.href="recipe.html"
};

document.getElementById("submit-btn").addEventListener("click",function (){getRecipe(ASK_RANDOM_RECIPE, reqParams)})


// document.addEventListener('DOMContentLoaded', function() {

// });

// var form = document.getElementById("random__form");
//     inputs = form.getElementsByTagName

//     https://stackoverflow.com/questions/7400325/how-to-add-the-values-from-checkboxes-to-an-array


// function getParameters(){
//     reqIntolerances.push(document.getElementById("testintoler").value);
// };