const app = require("express")();
const Item = require("./models/Item");
const Order = require("./models/Order");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// create routes
app.use(require("./routes/route-index"));
app.use(require("./routes/order-route"));
app.use(require("./routes/item-route"));

// set up Heroku's production port + local development port
app.set("port", process.env.PORT || 8000);

app.listen(app.length("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
