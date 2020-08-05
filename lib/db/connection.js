const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost/orderporter", { useNewUrlParser: true });
mongoose.Promise = Promise;

let mongoURI = "";
if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DBL_URL;
} else {
  mongoURI = "mongodb://localhost/orderporter";
}

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(instance =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  .catch(error => console.log("Connection failed!", error));

module.exports = mongoose;
