const router = require("express")();
const itemController = require("../controllers/item-controller");

router.get("/item", itemController.showItems);
router.get("/item/:name", itemController);
router.get("/item/:category", itemController.showCategory);
router.post("/item", itemController.create);
router.put("/item/:name", itemController.update);
router.delete("/item/:name", itemController.remove);
router.delete("/item/:category", itemController.removebyCategory);
