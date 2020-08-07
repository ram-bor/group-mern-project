/**
 * @api {get} /order Request all orders
 * @apiName GetOrder
 * @apiGroup Orders
 *
 * @apiSuccess {array} All Array of json objects of orders
 * @apiSuccessExample Sample URL: https://group-project-mern-backend.herokuapp.com/order/
 * Success Response:
 * [
  {
    "status": "Unconfirmed",
    "_id": "5f2c4dc6dd12ce0004e86993",
    "orderNumber": 12,
    "customer": {
      "_id": "5f2c4dc6dd12ce0004e86994",
      "name": "Atessa Dailami",
      "address": "233434 Somewhere St, Townsville, VA 29483",
      "phone": "555-232-4444"
    },
    "occasion": "recurring",
    "orderInfo": [
      {
        "_id": "5f2c4dc6dd12ce0004e86995",
        "itemName": "Chocolate Chip Cookie",
        "quantity": 2,
        "unitPrice": 25
      },
      {
        "_id": "5f2c4dc6dd12ce0004e86996",
        "itemName": "Sugar Cookie",
        "quantity": 3,
        "unitPrice": 25
      },
      {
        "_id": "5f2c4dc6dd12ce0004e86997",
        "itemName": "Brownie",
        "quantity": 1,
        "unitPrice": 35
      }
    ],
    "dueDate": "08/14/2020",
    "subTotal": 155,
    "tax": 15.5,
    "total": 170.5,
    "__v": 0
  },...
}
 */

/**
 * @api {get} /order/customers Request all customer names
 * @apiName GetCustomers
 * @apiGroup Orders
 *
 * @apiSuccess {array} Customers Array of strings of customer names.
 * @apiSuccessExample Sample URL: https://group-project-mern-backend.herokuapp.com/order/customers
 * Success Response:
 * [
  "Atessa Dailami",
  "Roberto Ramos",
  "Mike Visser",
  "Kira Harris",
  "Jamel Daugerty",
  "Rex Daugherty",
  "Noah Clark",
  "Anthony Maddox",
  "Allison Johnson",
  "Man Person",
  "Phil Visser",
  "Jack Nelson"
]
 */

/**
 * @api {post} /order Create a new order
 * @apiName PostOrder
 * @apiGroup Orders
 *
 * @apiSuccess {json} All API returns successfully posted json object.
 * @apiSuccessExample Sample URL: https://group-project-mern-backend.herokuapp.com/order
 * Success Response:
 *  {
    "status": "Confirmed",
    "orderNumber": 14,
    "customer": {
      "name": "Mike Visser",
      "address": "123 Not telling you st. Washington, DC 20001",
      "phone": "555-555-1234"
    },
    "occasion": "birthday",
    "orderInfo": [
      {
        "itemName": "Celebration Cake",
        "quantity": 1,
        "unitPrice": 40
      }
    ],
    "dueDate": "08/22/2020",
    "subTotal": 40,
    "tax": 4,
    "total": 44
  }

/**
 * @api {put} /order Update an existing order
 * @apiName PutOrder
 * @apiGroup Orders
 *
 * @apiSuccess {json} All API returns successfully updated json object.
 * @apiSuccessExample Sample URL: https://group-project-mern-backend.herokuapp.com/order
 * Success Response:
 *  {
    "status": "Confirmed",
    "_id": "5f2c4dc6dd12ce0004e86990",
    "orderNumber": 14,
    "customer": {
      "_id": "5f2c4dc6dd12ce0004e86991",
      "name": "Mike Visser",
      "address": "123 Not telling you st. Washington, DC 20001",
      "phone": "555-555-1234"
    },
    "occasion": "anniversary",
    "orderInfo": [
      {
        "_id": "5f2c4dc6dd12ce0004e86992",
        "itemName": "Celebration Cake",
        "quantity": 1,
        "unitPrice": 40
      }
    ],
    "dueDate": "08/22/2020",
    "subTotal": 40,
    "tax": 4,
    "total": 44,
    "__v": 0
  }
 */

/**
 * @api {delete} /order Delete an existing order
 * @apiName DeleteOrder
 * @apiGroup Orders
 *
 * @apiSuccess {json} All API returns successfully deleted json object.
 * @apiSuccessExample Sample URL: https://group-project-mern-backend.herokuapp.com/order
 * Success Response:
 * {
    "status": "Confirmed",
    "_id": "5f2c4dc6dd12ce0004e86990",
    "orderNumber": 14,
    "customer": {
      "_id": "5f2c4dc6dd12ce0004e86991",
      "name": "Mike Visser",
      "address": "123 Not telling you st. Washington, DC 20001",
      "phone": "555-555-1234"
    },
    "occasion": "anniversary",
    "orderInfo": [
      {
        "_id": "5f2c4dc6dd12ce0004e86992",
        "itemName": "Celebration Cake",
        "quantity": 1,
        "unitPrice": 40
      }
    ],
    "dueDate": "08/22/2020",
    "subTotal": 40,
    "tax": 4,
    "total": 44,
    "__v": 0
  }
 */

/*
* @api {GET} /item - Request all Items 
* @apiName GetItems
* @apiGroup Items
* @apiSuccess {All} API returns all matching objects in json format
* 
* @apiSampleRequest URL: http://domain/item/
* @apiSuccessExample {json} Success-Response:
* {
   "name":"Oatmeal Raisin Cookie",
   "category":"Cookie",
   "description": "Possibly the most controversial cookie ever, but sure to please your Grandma, our oatmeal raisin cookie is soft and loaded with golden raisins.",
   "image": "https://www.aspicyperspective.com/wp-content/uploads/2017/01/the-best-oatmeal-raisin-cookies-12.jpg",
   "unit": 12,
   "unitPrice": 25,
   "inventoryCount": 8
   }
* 
*/

/**
* @api {GET} /item/name/:name - Request Item information by name
* @apiName GetItem
* @apiGroup Items
* @apiParam {String} name of Item (case-sensitive)
* @apiSuccess {All} API returns all matching objects in json format
* 
* @apiSampleRequest URL: http://domain/item/name/Oatmeal Raisin Cookie
* @apiSuccessExample {json} Success-Response:
* {
   "name":"Oatmeal Raisin Cookie",
   "category":"Cookie",
   "description": "Possibly the most controversial cookie ever, but sure to please your Grandma, our oatmeal raisin cookie is soft and loaded with golden raisins.",
   "image": "https://www.aspicyperspective.com/wp-content/uploads/2017/01/the-best-oatmeal-raisin-cookies-12.jpg",
   "unit": 12,
   "unitPrice": 25,
   "inventoryCount": 8
   }
* 
*/

/**
* @api {GET} /item/category/:category - Request Item information by category
* @apiName GetCategory
* @apiGroup Items
* @apiParam {String} name of Category (case-sensitive)
* @apiSuccess {All} API returns all matching objects in json format
* 
* @apiSampleRequest URL: http://domain/item/category/Cookie
* @apiSuccessExample {json} Success-Response:
* {
   "name":"Oatmeal Raisin Cookie",
   "category":"Cookie",
   "description": "Possibly the most controversial cookie ever, but sure to please your Grandma, our oatmeal raisin cookie is soft and loaded with golden raisins.",
   "image": "https://www.aspicyperspective.com/wp-content/uploads/2017/01/the-best-oatmeal-raisin-cookies-12.jpg",
   "unit": 12,
   "unitPrice": 25,
   "inventoryCount": 8
   }
* 
*/

/**
* @api {GET} /item/id/:id - Request Item information by unique ID
* @apiName GetItemByID
* @apiGroup Items
* @apiParam {String} ID Number
* @apiSuccess {All} API returns all matching objects in json format
* 
* @apiSampleRequest URL: http://domain/item/id/5f2c4dc6dd12ce0004e86975
* @apiSuccessExample {json} Success-Response:
* {
   "name":"Oatmeal Raisin Cookie",
   "category":"Cookie",
   "description": "Possibly the most controversial cookie ever, but sure to please your Grandma, our oatmeal raisin cookie is soft and loaded with golden raisins.",
   "image": "https://www.aspicyperspective.com/wp-content/uploads/2017/01/the-best-oatmeal-raisin-cookies-12.jpg",
   "unit": 12,
   "unitPrice": 25,
   "inventoryCount": 8
   }
* 
*/

/**
* @api {POST} /item - Create a new Item
* @apiName CreateItem
* @apiGroup Items
* @apiSuccess {All} API returns created objects in json format
* 
* @apiSampleRequest URL: http://domain/item/
* @apiSuccessExample {json} Success-Response:
* {
   "name":"Oatmeal Raisin Cookie",
   "category":"Cookie",
   "description": "Possibly the most controversial cookie ever, but sure to please your Grandma, our oatmeal raisin cookie is soft and loaded with golden raisins.",
   "image": "https://www.aspicyperspective.com/wp-content/uploads/2017/01/the-best-oatmeal-raisin-cookies-12.jpg",
   "unit": 12,
   "unitPrice": 25,
   "inventoryCount": 8
   }
* 
*/

/**
* @api {PUT} /item/name/:name - Update Item by Name
* @apiName UpdateItem
* @apiGroup Items
* @apiParam {String} name of object (case-sensitive)
* @apiSuccess {All} API returns updated objects in json format
* 
* @apiSampleRequest URL: http://domain/item/name/Oatmeal Raisin Cookie
* @apiSuccessExample {json} Success-Response:
* {
   "name":"Oatmeal Raisin Cookie",
   "category":"Cookie",
   "description": "Possibly the most controversial cookie ever, but sure to please your Grandma, our oatmeal raisin cookie is soft and loaded with golden raisins.",
   "image": "https://www.aspicyperspective.com/wp-content/uploads/2017/01/the-best-oatmeal-raisin-cookies-12.jpg",
   "unit": 12,
   "unitPrice": 25,
   "inventoryCount": 8
   }
* 
*/

/**
* @api {DELETE} /item/name/:name - Delete Item by Name
* @apiName DeleteItem
* @apiGroup Items
* @apiParam {String} name of object (case-sensitive)
* @apiSuccess {All} API returns deleted objects in json format
* 
* @apiSampleRequest URL: http://domain/item/name/Oatmeal Raisin Cookie
* @apiSuccessExample {json} Success-Response:
* {
   "name":"Oatmeal Raisin Cookie",
   "category":"Cookie",
   "description": "Possibly the most controversial cookie ever, but sure to please your Grandma, our oatmeal raisin cookie is soft and loaded with golden raisins.",
   "image": "https://www.aspicyperspective.com/wp-content/uploads/2017/01/the-best-oatmeal-raisin-cookies-12.jpg",
   "unit": 12,
   "unitPrice": 25,
   "inventoryCount": 8
   }
* 
*/

/**
* @api {DELETE} /item/category/:category - Delete Item by Category Name
* @apiName DeleteItem
* @apiGroup Items
* @apiParam {String} category name of object (case-sensitive)
* @apiSuccess {All} API returns all deleted objects based by categories in json format
* 
* @apiSampleRequest URL: http://domain/item/category/Cookie
* @apiSuccessExample {json} Success-Response:
* {
   "name":"Oatmeal Raisin Cookie",
   "category":"Cookie",
   "description": "Possibly the most controversial cookie ever, but sure to please your Grandma, our oatmeal raisin cookie is soft and loaded with golden raisins.",
   "image": "https://www.aspicyperspective.com/wp-content/uploads/2017/01/the-best-oatmeal-raisin-cookies-12.jpg",
   "unit": 12,
   "unitPrice": 25,
   "inventoryCount": 8
   }
* 
*/
