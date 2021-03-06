const express = require("express");
const app = express();
const Item = require("./lib/models/Item");
const Order = require("./lib/models/Order");
const itemController = require("./lib/controllers/item-controller");
const orderController = require("./lib/controllers/order-controller");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("./lib/config/passport")();
const userController = require("./lib/controllers/userController");

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(cors());
app.use("/users", userController);
app.use("/docs", express.static("doc"));

// create routes
app.use(require("./lib/routes/route-index"));
app.use(require("./lib/routes/order-route"));
app.use(require("./lib/routes/item-route"));

// set up Heroku's production port + local development port
app.set("port", process.env.PORT || 8000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
