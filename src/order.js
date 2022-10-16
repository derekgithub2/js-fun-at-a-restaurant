function takeOrder(newOrder, deliveryOrders) {
  // add new orders to an order type list or array with .push
  if (deliveryOrders.length <= 2) {
    deliveryOrders.push(newOrder)
  }
}

function refundOrder (orderNum, deliveryOrders) {
  for (i = 0; i < deliveryOrders.length; i++) {
      if (deliveryOrders[i].orderNumber === orderNum) {
        deliveryOrders.splice(i, 1)
// deliveryOrders[i].orderNumber is looping through all the orders
// and bc we use dot notation it will specifically pull the value for
    }
  }
}

function listItems (items) {
  var foodNames = []
  for (i = 0; i < items.length; i++) {
    foodNames.push(items[i].item)
  }
  return foodNames.join(", ")
}

function searchOrder (deliveryOrders, foodName) {
  var isPresent = false;
  for (i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === foodName) {
      isPresent = true;
    }
  }
  // console.log(isPresent);
  return isPresent
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
