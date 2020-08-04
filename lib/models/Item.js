const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Item = new Schema({
  name: String,
  category: String,
  description: String,
  image: String,
  unit: Number,
  unitPrice: Number,
  inventoryCount: Number,
});

module.exports = mongoose.model("Item", Item);
