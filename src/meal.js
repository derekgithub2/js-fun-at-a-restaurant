function nameMenuItem(food) {
  return food = `Delicious ${food}`
};

function createMenuItem(name, price, type) {
  return menuItemName = {
    name,
    price,
    type
  }
};

function addIngredients(newFood, ingredients) {
  if (ingredients.indexOf(newFood) === -1) {
    return ingredients.push(newFood);
  } else {
    return ingredients;
  }
};

function formatPrice(price) {
  return `$${price}`;
}

function decreasePrice(decreasedPrice) {
  return decreasedPrice*0.9;
}

function createRecipe(title, ingredients, menuItemType) {
  return recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType,
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
