// // Spoonacular api key: da2c4227946040d386d435fdc069b601
// const spoonacularkey = "?apiKey=da2c4227946040d386d435fdc069b601"
// var askPropertiesRecipe = {};
// var askIngredientsRecipe = {};
// var askRandomRecipe = "https://api.spoonacular.com/recipes/random";

// function getRecipe(){
//     let response = await fetch(askRandomRecipe+spoonacularkey);
//     let commits = await response.json();
//     console.log(commits);
//     console.log("test");
// };

//document.getElementById("BTNrandomRecipe").addEventListener("click", getRecipe());

function getRecipe(){
    fetch("https://api.spoonacular.com/recipes/random?apiKey=da2c4227946040d386d435fdc069b601")
    .then(response => response.json())
    .then(recipes => console.log(recipes));
}