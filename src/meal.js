function nameMenuItem(food) {
  return food = `Delicious ${food}`
};

function createMenuItem(name, price, type) {
  return menuItemName = { name, price, type }
};

// var ingredients = [];

function addIngredients(newFood, ingredients) {
  return ingredients.push(newFood);
  // console.log(addIngredients.ingredients);
};
// addIngredients("cheese", ingredients);
// addIngredients("cheese", ingredients);

// var checkRepeat = ingredients.indexOf(newFood);
// while (checkRepeat !== -1) {
//   indices.push(checkRepeat);
//   checkRepeat = ingredients.indexOf(newFood, checkRepeat + 1);
// }
// console.log(checkRepeat);


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}
