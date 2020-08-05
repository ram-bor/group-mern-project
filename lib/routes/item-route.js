const router = require("express").Router();
const itemController = require("../controllers/item-controller");

router.get("/item", itemController.showItems);
router.get("/item/name/:name", itemController.showName);
router.get("/item/category/:category", itemController.showCategory);
router.post("/item", itemController.create);
router.put("/item/name/:name", itemController.update);
router.delete("/item/name/:name", itemController.remove);
router.delete("/item/category/:category", itemController.removebyCategory);

module.exports = router;
