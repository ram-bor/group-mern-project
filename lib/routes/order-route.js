const router = require("express")();
const orderController = require("../controllers/order-controller");

router.get("/order", orderController.showOrders);
router.get("/order/customers", orderController.showAllCustomers);
router.post("/order", orderController.create);
router.put("/order", orderController.update);
router.delete("/order", orderController.remove);
