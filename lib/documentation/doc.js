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
 */

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