# Order Porter 

Designed a backend application that hosts user, order and inventory data for 'Narwhal Bakery'. Users can view and select to see item inventory and manage order status.

Frontend repo can be found here: https://github.com/AtessaLeila/project8-mern-frontend

                                      Orders
<img width="682" alt="Screen Shot 2020-09-18 at 2 18 16 PM" src="https://user-images.githubusercontent.com/66038058/93647587-be585900-f9d6-11ea-9ed2-42fb7c762fbd.png">

                                      Item Catalog
<img width="1172" alt="Screen Shot 2020-09-18 at 2 16 50 PM" src="https://user-images.githubusercontent.com/66038058/93647564-b4365a80-f9d6-11ea-89b3-ae402e7c3f70.png">


## Technologies
* MongoDB
* ExpressJS
* NodeJS

#### Full CRUD capability:

* Deployed Heroku App: https://group-project-mern-backend.herokuapp.com/item  (Item Catalog)
* Deployed Heroku App: https://group-project-mern-backend.herokuapp.com/order  (Order Catalog)

###### Item Routes:
```
router.get("/item", itemController.showItems);
router.get("/item/name/:name", itemController.showName);
router.get("/item/category/:category", itemController.showCategory);
router.get("/item/id/:id", itemController.showItemById);
router.post("/item", itemController.create);
router.put("/item/name/:name", itemController.update);
router.delete("/item/name/:name", itemController.remove);
router.delete("/item/category/:category", itemController.removebyCategory);
```

###### Order Routes: 

```
router.get("/order", orderController.showOrders);
router.get("/order/customers", orderController.showAllCustomers);
router.get("/order/id/:id", orderController.showOrderById);
router.post("/order", orderController.create);
router.put("/order/id/:id", orderController.update);
router.delete("/order", orderController.remove);

