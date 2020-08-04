const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Customer = new Schema({
  name: String,
  address: String,
  phone: Number,
});

const orderInfo = new Schema({
  item_id: Number,
  quantity: Number,
  unit_price: Number,
});

const Order = new Schema({
  orderNumber: Number,
  customer: [Customer],
  occasion: String,
  orderInfo: [orderInfo],
  dueDate: Number,
  subtotal: Number,
  tax: Number,
  total: Number,
  status: {
    type: String,
    enum: ["Unconfirmed", "Confirmed", "Ready", "Delivered"],
    default: "Unconfirmed",
  },
});
