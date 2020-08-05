const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/orderporter", { useNewUrlParser: true });

let mongoURI = "";
if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DBL_URL;
} else {
  mongoURI = "mongodb://localhost/orderporter";
}

module.exports = mongoose;
