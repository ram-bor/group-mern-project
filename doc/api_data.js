define({ "api": [
  {
    "type": "POST",
    "url": "/item",
    "title": "",
    "name": "Create_Item",
    "group": "Items",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "All",
            "optional": false,
            "field": "API",
            "description": "<p>returns created objects in json format</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"name\":\"Oatmeal Raisin Cookie\",\n    \"category\":\"Cookie\",\n    \"description\": \"Possibly the most controversial cookie ever, but sure to please your Grandma, our oatmeal raisin cookie is soft and loaded with golden raisins.\",\n    \"image\": \"https://www.aspicyperspective.com/wp-content/uploads/2017/01/the-best-oatmeal-raisin-cookies-12.jpg\",\n    \"unit\": 12,\n    \"unitPrice\": 25,\n    \"inventoryCount\": 8\n    }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "URL: http://domain/item/"
      }
    ],
    "version": "0.0.0",
    "filename": "lib/documentation/doc.js",
    "groupTitle": "Items"
  },
  {
    "type": "DELETE",
    "url": "/item/category/:category",
    "title": "",
    "name": "Delete_Item_by_Category_Name",
    "group": "Items",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>name of object (case-sensitive)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "All",
            "optional": false,
            "field": "API",
            "description": "<p>returns all deleted objects based by categories in json format</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"name\":\"Oatmeal Raisin Cookie\",\n    \"category\":\"Cookie\",\n    \"description\": \"Possibly the most controversial cookie ever, but sure to please your Grandma, our oatmeal raisin cookie is soft and loaded with golden raisins.\",\n    \"image\": \"https://www.aspicyperspective.com/wp-content/uploads/2017/01/the-best-oatmeal-raisin-cookies-12.jpg\",\n    \"unit\": 12,\n    \"unitPrice\": 25,\n    \"inventoryCount\": 8\n    }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "URL: http://domain/item/category/Cookie"
      }
    ],
    "version": "0.0.0",
    "filename": "lib/documentation/doc.js",
    "groupTitle": "Items"
  },
  {
    "type": "DELETE",
    "url": "/item/name/:name",
    "title": "",
    "name": "Delete_Item_by_Name",
    "group": "Items",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>of object (case-sensitive)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "All",
            "optional": false,
            "field": "API",
            "description": "<p>returns deleted objects in json format</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"name\":\"Oatmeal Raisin Cookie\",\n    \"category\":\"Cookie\",\n    \"description\": \"Possibly the most controversial cookie ever, but sure to please your Grandma, our oatmeal raisin cookie is soft and loaded with golden raisins.\",\n    \"image\": \"https://www.aspicyperspective.com/wp-content/uploads/2017/01/the-best-oatmeal-raisin-cookies-12.jpg\",\n    \"unit\": 12,\n    \"unitPrice\": 25,\n    \"inventoryCount\": 8\n    }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "URL: http://domain/item/name/Oatmeal Raisin Cookie"
      }
    ],
    "version": "0.0.0",
    "filename": "lib/documentation/doc.js",
    "groupTitle": "Items"
  },
  {
    "type": "GET",
    "url": "/item/category/:category",
    "title": "",
    "name": "Request_Item_information_by_category",
    "group": "Items",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>of Category (case-sensitive)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "All",
            "optional": false,
            "field": "API",
            "description": "<p>returns all matching objects in json format</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"name\":\"Oatmeal Raisin Cookie\",\n    \"category\":\"Cookie\",\n    \"description\": \"Possibly the most controversial cookie ever, but sure to please your Grandma, our oatmeal raisin cookie is soft and loaded with golden raisins.\",\n    \"image\": \"https://www.aspicyperspective.com/wp-content/uploads/2017/01/the-best-oatmeal-raisin-cookies-12.jpg\",\n    \"unit\": 12,\n    \"unitPrice\": 25,\n    \"inventoryCount\": 8\n    }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "URL: http://domain/item/category/Cookie"
      }
    ],
    "version": "0.0.0",
    "filename": "lib/documentation/doc.js",
    "groupTitle": "Items"
  },
  {
    "type": "GET",
    "url": "/item/name/:name",
    "title": "",
    "name": "Request_Item_information_by_name",
    "group": "Items",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>of Item (case-sensitive)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "All",
            "optional": false,
            "field": "API",
            "description": "<p>returns all matching objects in json format</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"name\":\"Oatmeal Raisin Cookie\",\n    \"category\":\"Cookie\",\n    \"description\": \"Possibly the most controversial cookie ever, but sure to please your Grandma, our oatmeal raisin cookie is soft and loaded with golden raisins.\",\n    \"image\": \"https://www.aspicyperspective.com/wp-content/uploads/2017/01/the-best-oatmeal-raisin-cookies-12.jpg\",\n    \"unit\": 12,\n    \"unitPrice\": 25,\n    \"inventoryCount\": 8\n    }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "URL: http://domain/item/name/Oatmeal Raisin Cookie"
      }
    ],
    "version": "0.0.0",
    "filename": "lib/documentation/doc.js",
    "groupTitle": "Items"
  },
  {
    "type": "GET",
    "url": "/item/id/:id",
    "title": "",
    "name": "Request_Item_information_by_unique_ID",
    "group": "Items",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ID",
            "description": "<p>Number</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "All",
            "optional": false,
            "field": "API",
            "description": "<p>returns all matching objects in json format</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"name\":\"Oatmeal Raisin Cookie\",\n    \"category\":\"Cookie\",\n    \"description\": \"Possibly the most controversial cookie ever, but sure to please your Grandma, our oatmeal raisin cookie is soft and loaded with golden raisins.\",\n    \"image\": \"https://www.aspicyperspective.com/wp-content/uploads/2017/01/the-best-oatmeal-raisin-cookies-12.jpg\",\n    \"unit\": 12,\n    \"unitPrice\": 25,\n    \"inventoryCount\": 8\n    }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "URL: http://domain/item/id/5f2c4dc6dd12ce0004e86975"
      }
    ],
    "version": "0.0.0",
    "filename": "lib/documentation/doc.js",
    "groupTitle": "Items"
  },
  {
    "type": "GET",
    "url": "/item",
    "title": "",
    "name": "Request_all_Items",
    "group": "Items",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "All",
            "description": "<p>API returns successfully posted json object.</p>"
          },
          {
            "group": "Success 200",
            "type": "All",
            "optional": false,
            "field": "API",
            "description": "<p>returns all matching objects in json format</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sample URL: https://group-project-mern-backend.herokuapp.com/order",
          "content": "Success Response:\n {\n    \"status\": \"Confirmed\",\n    \"orderNumber\": 14,\n    \"customer\": {\n      \"name\": \"Mike Visser\",\n      \"address\": \"123 Not telling you st. Washington, DC 20001\",\n      \"phone\": \"555-555-1234\"\n    },\n    \"occasion\": \"birthday\",\n    \"orderInfo\": [\n      {\n        \"itemName\": \"Celebration Cake\",\n        \"quantity\": 1,\n        \"unitPrice\": 40\n      }\n    ],\n    \"dueDate\": \"08/22/2020\",\n    \"subTotal\": 40,\n    \"tax\": 4,\n    \"total\": 44\n  }",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n    \"name\":\"Oatmeal Raisin Cookie\",\n    \"category\":\"Cookie\",\n    \"description\": \"Possibly the most controversial cookie ever, but sure to please your Grandma, our oatmeal raisin cookie is soft and loaded with golden raisins.\",\n    \"image\": \"https://www.aspicyperspective.com/wp-content/uploads/2017/01/the-best-oatmeal-raisin-cookies-12.jpg\",\n    \"unit\": 12,\n    \"unitPrice\": 25,\n    \"inventoryCount\": 8\n    }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "URL: http://domain/item/"
      }
    ],
    "version": "0.0.0",
    "filename": "lib/documentation/doc.js",
    "groupTitle": "Items"
  },
  {
    "type": "PUT",
    "url": "/item/name/:name",
    "title": "",
    "name": "Update_Item_by_Name",
    "group": "Items",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>of object (case-sensitive)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "All",
            "optional": false,
            "field": "API",
            "description": "<p>returns updated objects in json format</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"name\":\"Oatmeal Raisin Cookie\",\n    \"category\":\"Cookie\",\n    \"description\": \"Possibly the most controversial cookie ever, but sure to please your Grandma, our oatmeal raisin cookie is soft and loaded with golden raisins.\",\n    \"image\": \"https://www.aspicyperspective.com/wp-content/uploads/2017/01/the-best-oatmeal-raisin-cookies-12.jpg\",\n    \"unit\": 12,\n    \"unitPrice\": 25,\n    \"inventoryCount\": 8\n    }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "URL: http://domain/item/name/Oatmeal Raisin Cookie"
      }
    ],
    "version": "0.0.0",
    "filename": "lib/documentation/doc.js",
    "groupTitle": "Items"
  },
  {
    "type": "delete",
    "url": "/order",
    "title": "Delete an existing order",
    "name": "DeleteOrder",
    "group": "Orders",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "All",
            "description": "<p>API returns successfully deleted json object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sample URL: https://group-project-mern-backend.herokuapp.com/order",
          "content": "Success Response:\n{\n    \"status\": \"Confirmed\",\n    \"_id\": \"5f2c4dc6dd12ce0004e86990\",\n    \"orderNumber\": 14,\n    \"customer\": {\n      \"_id\": \"5f2c4dc6dd12ce0004e86991\",\n      \"name\": \"Mike Visser\",\n      \"address\": \"123 Not telling you st. Washington, DC 20001\",\n      \"phone\": \"555-555-1234\"\n    },\n    \"occasion\": \"anniversary\",\n    \"orderInfo\": [\n      {\n        \"_id\": \"5f2c4dc6dd12ce0004e86992\",\n        \"itemName\": \"Celebration Cake\",\n        \"quantity\": 1,\n        \"unitPrice\": 40\n      }\n    ],\n    \"dueDate\": \"08/22/2020\",\n    \"subTotal\": 40,\n    \"tax\": 4,\n    \"total\": 44,\n    \"__v\": 0\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "lib/documentation/doc.js",
    "groupTitle": "Orders"
  },
  {
    "type": "get",
    "url": "/order/customers",
    "title": "Request all customer names",
    "name": "GetCustomers",
    "group": "Orders",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "Customers",
            "description": "<p>Array of strings of customer names.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sample URL: https://group-project-mern-backend.herokuapp.com/order/customers",
          "content": "Success Response:\n[\n  \"Atessa Dailami\",\n  \"Roberto Ramos\",\n  \"Mike Visser\",\n  \"Kira Harris\",\n  \"Jamel Daugerty\",\n  \"Rex Daugherty\",\n  \"Noah Clark\",\n  \"Anthony Maddox\",\n  \"Allison Johnson\",\n  \"Man Person\",\n  \"Phil Visser\",\n  \"Jack Nelson\"\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "lib/documentation/doc.js",
    "groupTitle": "Orders"
  },
  {
    "type": "get",
    "url": "/order",
    "title": "Request all orders",
    "name": "GetOrder",
    "group": "Orders",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "All",
            "description": "<p>Array of json objects of orders</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sample URL: https://group-project-mern-backend.herokuapp.com/order/",
          "content": "Success Response:\n[\n  {\n    \"status\": \"Unconfirmed\",\n    \"_id\": \"5f2c4dc6dd12ce0004e86993\",\n    \"orderNumber\": 12,\n    \"customer\": {\n      \"_id\": \"5f2c4dc6dd12ce0004e86994\",\n      \"name\": \"Atessa Dailami\",\n      \"address\": \"233434 Somewhere St, Townsville, VA 29483\",\n      \"phone\": \"555-232-4444\"\n    },\n    \"occasion\": \"recurring\",\n    \"orderInfo\": [\n      {\n        \"_id\": \"5f2c4dc6dd12ce0004e86995\",\n        \"itemName\": \"Chocolate Chip Cookie\",\n        \"quantity\": 2,\n        \"unitPrice\": 25\n      },\n      {\n        \"_id\": \"5f2c4dc6dd12ce0004e86996\",\n        \"itemName\": \"Sugar Cookie\",\n        \"quantity\": 3,\n        \"unitPrice\": 25\n      },\n      {\n        \"_id\": \"5f2c4dc6dd12ce0004e86997\",\n        \"itemName\": \"Brownie\",\n        \"quantity\": 1,\n        \"unitPrice\": 35\n      }\n    ],\n    \"dueDate\": \"08/14/2020\",\n    \"subTotal\": 155,\n    \"tax\": 15.5,\n    \"total\": 170.5,\n    \"__v\": 0\n  },...\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "lib/documentation/doc.js",
    "groupTitle": "Orders"
  },
  {
    "type": "put",
    "url": "/order",
    "title": "Update an existing order",
    "name": "PutOrder",
    "group": "Orders",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "All",
            "description": "<p>API returns successfully updated json object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sample URL: https://group-project-mern-backend.herokuapp.com/order",
          "content": "Success Response:\n {\n    \"status\": \"Confirmed\",\n    \"_id\": \"5f2c4dc6dd12ce0004e86990\",\n    \"orderNumber\": 14,\n    \"customer\": {\n      \"_id\": \"5f2c4dc6dd12ce0004e86991\",\n      \"name\": \"Mike Visser\",\n      \"address\": \"123 Not telling you st. Washington, DC 20001\",\n      \"phone\": \"555-555-1234\"\n    },\n    \"occasion\": \"anniversary\",\n    \"orderInfo\": [\n      {\n        \"_id\": \"5f2c4dc6dd12ce0004e86992\",\n        \"itemName\": \"Celebration Cake\",\n        \"quantity\": 1,\n        \"unitPrice\": 40\n      }\n    ],\n    \"dueDate\": \"08/22/2020\",\n    \"subTotal\": 40,\n    \"tax\": 4,\n    \"total\": 44,\n    \"__v\": 0\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "lib/documentation/doc.js",
    "groupTitle": "Orders"
  }
] });
