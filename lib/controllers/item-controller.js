const Item = require("../models/Item");

module.exports = {
  // get all Items
  showItems: (req, res) => {
    Item.find({}).then(item => {
      res.json(item);
    });
  },

  // get specific Item by searching a name
  showName: (req, res) => {
    Item.find({ name: req.params.name }).then(item => {
      res.json(item);
    });
  },

  //get specific Item by searching for category
  showCategory: (req, res) => {
    Item.find({ category: req.params.category }).then(item => {
      res.json(item);
    });
  },

  //get specific Item by searching for ID
  showItemById: (req, res) => {
    Item.findById(req.params.id).then(item => {
      res.json(item);
    });
  },

  // create new Item
  create: (req, res) => {
    Item.create(req.body).then(item => {
      res.json(item);
    });
  },

  // update an Item by searching a name and updating the body
  update: (req, res) => {
    Item.findOneAndUpdate({ name: req.params.name }, req.body, {
      new: true,
    }).then(item => {
      res.json(item);
    });
  },

  // delete an Item by searching a name and removing the body
  remove: (req, res) => {
    Item.findOneAndRemove({ name: req.params.name }).then(item => {
      res.json(item);
    });
  },
  //delete an Item by searching for category
  removebyCategory: (req, res) => {
    Item.findOneAndRemove({ category: req.params.category }).then(item => {
      res.json(item);
    });
  },
};
