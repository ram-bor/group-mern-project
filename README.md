# Order Porter 

Designed a backend application to hold locally created API data to be used for Frontend application.

<img width="682" alt="Screen Shot 2020-09-18 at 2 18 16 PM" src="https://user-images.githubusercontent.com/66038058/93647587-be585900-f9d6-11ea-9ed2-42fb7c762fbd.png">


<img width="1172" alt="Screen Shot 2020-09-18 at 2 16 50 PM" src="https://user-images.githubusercontent.com/66038058/93647564-b4365a80-f9d6-11ea-89b3-ae402e7c3f70.png">


## Technologies
* MongoDB
* ExpressJS
* NodeJS

## Database
Created files to hold JSON data for orders and items
Created files to import, connect and seed database

## Schema/Models
Created directories to hold model/routes files
Created relevant schemas for models to be exported with appropriate data validation types

## Controllers/Routes
Added multiple HTTP methods to implement CRUD by setting up appropriate route paths

## API Routes

#### Full CRUD capability:

###### Items:
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

###### Orders: 

```
router.get("/order", orderController.showOrders);
router.get("/order/customers", orderController.showAllCustomers);
router.get("/order/id/:id", orderController.showOrderById);
router.post("/order", orderController.create);
router.put("/order/id/:id", orderController.update);
router.delete("/order", orderController.remove);

