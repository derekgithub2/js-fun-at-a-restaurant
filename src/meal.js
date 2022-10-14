function nameMenuItem(food) {
  return food = `Delicious ${food}`
};

function createMenuItem(name, price, type) {
  return menuItemName = { name, price, type }
};

// var ingredients = [];

function addIngredients(newFood, ingredients) {
  this.ingredients = [];
  if (this.ingredients.indexOf(newFood) === -1) {
    return this.ingredients.push(newFood);
    // console.log(this.ingredients);
  }
  if (newFood = this.ingredients.indexOf(newFood)) {
    return this.ingredients.pop(newFood);
  }
};


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}
