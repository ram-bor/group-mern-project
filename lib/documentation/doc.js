// Items

/**
 * @api {GET} /item
 * @apiName Request all Items 
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
 * @api {GET} /item/name/:name 
 * @apiName Request Item information by name
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
 * @api {GET} /item/category/:category
 * @apiName Request Item information by category
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
 * @api {GET} /item/id/:id
 * @apiName Request Item information by unique ID
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
 * @api {POST} /item 
 * @apiName Create Item
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
 * @api {PUT} /item/name/:name
 * @apiName Update Item by Name
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
 * @api {DELETE} /item/name/:name
 * @apiName Delete Item by Name
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
 * @api {DELETE} /item/category/:category
 * @apiName Delete Item by Category Name
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
