const Item = require("../models/Item");
const Order = require("../models/Order");

// Item data
Item.deleteMany({}).then(() => {
  Item.create()
    .then(items => {
      console.log(items);
    })
    .catch(error => {
      console.log(error);
    });
});

// Order data
Order.deleteMany({}).then(() => {
  Order.create()
    .then(orders => {
      console.log(orders);
    })
    .catch(error => {
      console.log(error);
    });
});
