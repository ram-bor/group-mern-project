const Item = require("../models/Item");
const Order = require("../models/Order");
const itemData = require("./catalog.json");
const orderData = require("./orders.json");

// Item data
Item.deleteMany({}).then(() => {
  Item.create(itemData)
    .then(items => {
      console.log(items);
    })
    .catch(error => {
      console.log(error);
    });
});

// Order data
Order.deleteMany({}).then(() => {
  Order.create(orderData)
    .then(orders => {
      console.log(orders);
    })
    .catch(error => {
      console.log(error);
    });
});
