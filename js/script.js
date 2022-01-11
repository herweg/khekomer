const SPOONACULAR_KEY = "?apiKey=da2c4227946040d386d435fdc069b601"
const ASK_PROPERTIES_RECIPE = "https://api.spoonacular.com/recipes/complexSearch";
const ASK_INGREDIENTS_RECIPE = "https://api.spoonacular.com/recipes/complexSearch"; //params: &ingredients, &ignorePantry=true
const ASK_RANDOM_RECIPE = "https://api.spoonacular.com/recipes/random"; //params: &intolerances, &diet, &meal type (&type)

const RECIPE_INTOLERANCES = document.getElementsByName("intolerances").value;

var recipe = {};

function getCheckboxValues(form) {
    var banlist = form.banlist;
    var diet = form.diet;
    var dish = form.dish;
    var reqBanlist = [];
    var reqDiet = [];
    var reqDish = [];

    switch (form.id) {
        case "form_properties":
            for (let i = 0; i < diet.length; i++) {
                if (diet[i].checked) {
                    reqBanlist.push(diet[i].value);
                }
            }
            var reqParams = "&diet=" + reqDiet + "," + reqDish;
            return reqParams;

        case "form_random":
            for (let i = 0; i < banlist.length; i++) {
                if (banlist[i].checked) {
                    reqBanlist.push(banlist[i].value);
                }
            }
            for (let i = 0; i < diet.length; i++) {
                if (diet[i].checked) {
                    reqDiet.push(diet[i].value);
                }
            }
            for (let i = 0; i < dish.length; i++) {
                if (dish[i].checked) {
                    reqDish.push(dish[i].value);
                }
            }

            var reqParams = "&tags=" + reqBanlist + "," + reqDiet + "," + reqDish;
            return reqParams;

        default:
    };
};

async function getRecipe(reqRecipe, reqParameters) {
    let response = await fetch(reqRecipe + SPOONACULAR_KEY + reqParameters);
    recipe = await response.json();

    let recipeStored = JSON.stringify(recipe);
    sessionStorage.setItem("recipe", recipeStored);

    console.log(recipe);

    window.location.href = "recipe.html"
};

document.getElementById("properties-btn").addEventListener("click", function () {
    reqParams = getCheckboxValues(document.getElementById("form_properties")),
        getRecipe(ASK_PROPERTIES_RECIPE, reqParams)
});
// document.getElementById("ingredients-btn").addEventListener("click", function () {
//     reqParams = getCheckboxValues(document.getElementById("form_ingredients")),
//         getRecipe(ASK_INGREDIENTS_RECIPE, reqParams)
// });
document.getElementById("random-btn").addEventListener("click", function () {
    reqParams = getCheckboxValues(document.getElementById("form_random")),
        getRecipe(ASK_RANDOM_RECIPE, reqParams)
});

// ingredientes [a,b,c] => a b c
var arrayIngredients = [];
var busquedaBtn = document.getElementById("search-btn");
var busqueda = document.getElementById("prop_search");
var queueTags = document.getElementById("tags_in_queue");


busquedaBtn.addEventListener("click", function () {
    if (busqueda.value != "") {
        arrayIngredients.push(busqueda.value)
        var quedtags = document.createElement("li")
        quedtags.textContent = busqueda.value;
        queueTags.appendChild(quedtags);
        busqueda.value = "";
    }
});


