const SPOONACULAR_KEY = "?apiKey=da2c4227946040d386d435fdc069b601"
const ASK_PROPERTIES_RECIPE = "https://api.spoonacular.com/recipes/findByNutrients";
const ASK_INGREDIENTS_RECIPE = "https://api.spoonacular.com/recipes/findByIngredients"; //params: &ingredients, &ignorePantry=true
const ASK_RANDOM_RECIPE = "https://api.spoonacular.com/recipes/random"; //params: &intolerances, &diet, &meal type (&type)

var recipe = {};

var reqIntolerances = [];
var reqDiet = [];
var reqType = [];
var reqParams = "&intolerances="+reqIntolerances+"&diet="+reqDiet+"&type="+reqType;

var form = document.getElementById("random__form");
    inputs = form.getElementsByTagName




function getParameters(){
    reqIntolerances.push(document.getElementById("testintoler").value);
};


async function getRecipe(reqRecipe, reqParameters){
    let response = await fetch(reqRecipe+SPOONACULAR_KEY+reqParameters);
    recipe = await response.json();
    console.log(recipe);

    var data = document.getElementById("recipe__description");

    data.textContent = recipe.recipes[0].title;
    data.textContent += recipe.recipes[0].summary;
    data.textContent += recipe.recipes[0].extendedIngredients;
    data.textContent += recipe.recipes[0].instructions;


    // for (let i = 0; i < recipe.length; i++) {
    //     const element = recipe[i];

    //     var div = document.createElement("div");
    //     div.innerHTML = recipe[i];
    //     data.appendChild(div);
    // }

};

/*document.getElementById("BTNrandomRecipe").addEventListener("click", getRecipe());

? number=1 & tags=vegetarian,dessert

? intolerances=  {} , {}  , {}  &  tags= {} , {}

*/
