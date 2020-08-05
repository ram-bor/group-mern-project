const app = require("express")();
const Item = require("./lib/models/Item");
const Order = require("./lib/models/Order");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// create routes
app.use(require("./lib/routes/route-index"));
app.use(require("./lib/routes/order-route"));
app.use(require("./lib/routes/item-route"));

// set up Heroku's production port + local development port
app.set("port", process.env.PORT || 8000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
