function cakes(recipe, available) {
  if (!recipe || !available) {
    return 0;
  }
  var availableCakes = 0;
  var initializer = 0;
  for (var key in recipe){
    var recipeIngredientAmount = recipe[key];
    var availableIngredientAmount = available[key];
    var cakesForIngredient = Math.floor(availableIngredientAmount/recipeIngredientAmount);
    if(!availableIngredientAmount){
      return 0;
    } else if (initializer === 0) {
      availableCakes = cakesForIngredient;
    } else if (availableCakes > cakesForIngredient) {
      availableCakes = cakesForIngredient;
    }
    initializer++;
  }
  return availableCakes;
}

let recipe = {flour: 500, sugar: 200, eggs: 1};
let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
console.log(cakes(recipe, available));