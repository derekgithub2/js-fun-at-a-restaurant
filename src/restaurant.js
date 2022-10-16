function createRestaurant (name) {
  var restaurant = {name}
  restaurant.menus = {
    breakfast: [],
    lunch: [],
    dinner: [],
  }
  return restaurant;
}

function addMenuItem (restaurant, food1) {
  if (food1.type === "lunch" && !restaurant.menus.lunch.includes(food1)) {
    restaurant.menus.lunch.push(food1);
  } else if (food1.type === "breakfast" && !restaurant.menus.breakfast.includes(food1)) {
    restaurant.menus.breakfast.push(food1)
  } else if (food1.type === "dinner" && !restaurant.menus.dinner.includes(food1)) {
    restaurant.menus.dinner.push(food1)
  }
}

function removeMenuItem (restaurant, removeFood, foodType) {

  var menuRef;

  if (foodType === "breakfast") {
    menuRef = restaurant.menus.breakfast;
    if (menuRef.length > 0) {
      var newFoodName = menuRef[0].name;
      if (newFoodName !== removeFood) {
        return `Sorry, we don't sell ${removeFood}, try adding a new recipe!`
      } else {
        menuRef.splice(0, 1)
        return `No one is eating our ${removeFood} - it has been removed from the ${foodType} menu!`
      }
    } else {
      return `Sorry, we don't sell ${removeFood}, try adding a new recipe!`
    }
  }
  
  // if menuRef.length > 0 then get newfoodname otherwise return error.
  if (foodType === "lunch") {
    menuRef = restaurant.menus.lunch;
    if (menuRef.length > 0) {
      var newFoodName = menuRef[0].name;
      if (newFoodName !== removeFood) {
        return `Sorry, we don't sell ${removeFood}, try adding a new recipe!`
      } else {
        menuRef.splice(0, 1)
        return `No one is eating our ${removeFood} - it has been removed from the ${foodType} menu!`
        }
    } else {
        return `Sorry, we don't sell ${removeFood}, try adding a new recipe!`
    }
  }

  if (foodType === "dinner") {
    menuRef = restaurant.menus.dinner;
    if (menuRef.length > 0) {
      var newFoodName = menuRef[0].name;
      if (newFoodName !== removeFood) {
        return `Sorry, we don't sell ${removeFood}, try adding a new recipe!`
    } else {
        menuRef.splice(0, 1)
        return `No one is eating our ${removeFood} - it has been removed from the ${foodType} menu!`
      }
    } else {
        return `Sorry, we don't sell ${removeFood}, try adding a new recipe!`
    }
  }
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
