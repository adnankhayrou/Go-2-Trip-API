const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController');

router.post('/createProduct', productController.createNewProduct);
router.get('/getProduct/:id', productController.getProductWithId);
router.get('/userProducts/:id', productController.getUserProducts);
router.get('/allProduct', productController.getAllProduct);
router.get('/productsFilter', productController.productsFilter);
router.post('/updateProduct/:id', productController.updateProduct);
router.delete('/deleteProduct/:id', productController.deleteProduct);


/**
 * @swagger
 * /api/product/createProduct:
 *   post:
 *     summary: Create a new product
 *     description: Endpoint to create a new product.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productName:
 *                 type: string
 *                 description: The name of the product.
 *               description:
 *                 type: string
 *                 description: The description of the product.
 *               price:
 *                 type: number
 *                 description: The price of the product.
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Array of image URLs for the product.
 *             example:
 *               productName: Example Product
 *               description: This is an example product.
 *               price: 19.99
 *               images:
 *                 - https://example.com/image1.jpg
 *                 - https://example.com/image2.jpg
 *     responses:
 *       '200':
 *         description: Product created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: string
 *                   description: Indicates success message.
 *                 Product:
 *                   $ref: '#/components/schemas/Product'
 *       '400':
 *         description: Bad request, validation error, or something went wrong.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 *     tags:
 *       - Products
 */


/**
 * @swagger
 * /api/product/getProduct/{id}:
 *   get:
 *     summary: Get product by ID
 *     description: Retrieve a product by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Product found successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: string
 *                   description: Indicates success message.
 *                 data:
 *                   $ref: '#/components/schemas/Product'
 *       '404':
 *         description: Product not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 *       '400':
 *         description: Something went wrong.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 *     tags:
 *       - Products
 */


/**
 * @swagger
 * /api/product/userProducts/{id}:
 *   get:
 *     summary: Get user products
 *     description: Retrieve products associated with a user by user ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to retrieve products for.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Products found successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: string
 *                   description: Indicates success message.
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Product'
 *       '404':
 *         description: Products not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 *       '400':
 *         description: Something went wrong.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 *     tags:
 *       - Products
 */


/**
 * @swagger
 * /api/product/allProduct:
 *   get:
 *     summary: Get all products
 *     description: Retrieve all products.
 *     responses:
 *       '200':
 *         description: Products found successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: string
 *                   description: Indicates success message.
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Product'
 *       '404':
 *         description: Products not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 *       '400':
 *         description: Something went wrong.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 *     tags:
 *       - Products
 */


/**
 * @swagger
 * /api/product/productsFilter:
 *   get:
 *     summary: Filter products
 *     description: Retrieve products based on specified filters.
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Name of the product to filter.
 *       - in: query
 *         name: category_id
 *         schema:
 *           type: string
 *         description: ID of the category to filter products.
 *       - in: query
 *         name: subCategory_id
 *         schema:
 *           type: string
 *         description: ID of the subcategory to filter products.
 *       - in: query
 *         name: city_id
 *         schema:
 *           type: string
 *         description: ID of the city to filter products.
 *     responses:
 *       '200':
 *         description: Products found successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: string
 *                   description: Indicates success message.
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Product'
 *       '404':
 *         description: Products not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: string
 *                   description: Message indicating products not found.
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Product'
 *       '500':
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 *     tags:
 *       - Products
 */


/**
 * @swagger
 * /api/product/updateProduct/{id}:
 *   post:
 *     summary: Update a product
 *     description: Endpoint to update an existing product.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productName:
 *                 type: string
 *                 description: The name of the product.
 *               description:
 *                 type: string
 *                 description: The description of the product.
 *               price:
 *                 type: number
 *                 description: The price of the product.
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Array of image URLs for the product.
 *               oldImages:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Array of old image URLs for the product.
 *             example:
 *               productName: Updated Product
 *               description: This is an updated product.
 *               price: 29.99
 *               images:
 *                 - https://example.com/new-image1.jpg
 *                 - https://example.com/new-image2.jpg
 *               oldImages:
 *                 - https://example.com/old-image1.jpg
 *                 - https://example.com/old-image2.jpg
 *     responses:
 *       '200':
 *         description: Product updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: string
 *                   description: Indicates success message.
 *                 updatedProduct:
 *                   $ref: '#/components/schemas/Product'
 *       '400':
 *         description: Bad request or something went wrong.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 *       '404':
 *         description: Product not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 *     tags:
 *       - Products
 */


/**
 * @swagger
 * /api/product/deleteProduct/{id}:
 *   delete:
 *     summary: Delete a product
 *     description: Endpoint to delete an existing product.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product to delete.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Product deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: string
 *                   description: Indicates success message.
 *                 deletedProduct:
 *                   $ref: '#/components/schemas/Product'
 *       '404':
 *         description: Product not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 *       '400':
 *         description: Something went wrong.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 *     tags:
 *       - Products
 */




module.exports = router;