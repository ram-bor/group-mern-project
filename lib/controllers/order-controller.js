const Order = require("../models/Order");

module.exports = {
  // get all Orders
  showOrders: (req, res) => {
    Order.find({}).then(order => {
      res.json(order);
    });
  },

  // show all Orders by searching a Customer
  showAllCustomers: (req, res) => {
    Order.find({})
      .then(customers => {
        let custList = customers.map(value => {
          let custInfo = value.customer.name;
          return custInfo;
        });
        return custList;
      })
      .then(array => {
        let newArray = [...new Set(array)];
        res.json(newArray);
      });
  },

  // show specific Order by searching for ID
  showOrderById: (req, res) => {
    console.log(req.params.id);
    Order.findById(req.params.id).then(order => {
      res.json(order);
    });
  },
  // create new Order
  create: (req, res) => {
    Order.create(req.body).then(order => {
      res.json(order);
    });
  },

  // update an Order by searching a ID and updating the body
  update: (req, res) => {
    Order.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    }).then(order => {
      res.json(order);
    });
  },

  // delete an Order by searching a name and removing the body
  remove: (req, res) => {
    Order.findOneAndRemove({ name: req.params.name }).then(order => {
      res.json(rder);
    });
  },
};
