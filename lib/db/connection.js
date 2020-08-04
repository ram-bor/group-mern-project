const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/orderporter", { useNewUrlParser: true });

module.exports = mongoose;
