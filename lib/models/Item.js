const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Item = new Schema({
  name: String,
  description: String,
  image: String,
  unit: Number,
  unitPrice: Number,
  inventoryCount: Number,
});
