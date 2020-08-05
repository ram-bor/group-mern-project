const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost/orderporter", { useNewUrlParser: true });
// mongoose.connect(
//   "mongodb+srv://bakedGoods:sweetSugar@cluster0.lwaai.mongodb.net/orderporter?retryWrites=true&w=majority",
//   { useNewUrlParser: true }
// );
mongoose.Promise = Promise;

let mongoURI = "";
if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
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
