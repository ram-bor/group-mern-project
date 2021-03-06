const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.json());

router.use("/item", require("./item-route"));
router.use("/order", require("./order-route"));

module.exports = router;
