const app = require("express")();
const Item = require("./models/Item");
const Order = require("./models/Order");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// create routes
app.use(require("./routes/route-index"));
app.use(require("./routes/order-route"));
app.use(require("./routes/item-route"));

app.listen(8000, () => {
  console.log("listening on port 8000");
});
