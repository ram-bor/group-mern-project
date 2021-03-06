const router = require("express").Router();
const orderController = require("../controllers/order-controller");

router.get("/order", orderController.showOrders);
router.get("/order/customers", orderController.showAllCustomers);
router.get("/order/id/:id", orderController.showOrderById);
router.post("/order", orderController.create);
router.put("/order/id/:id", orderController.update);
router.delete("/order", orderController.remove);

module.exports = router;
