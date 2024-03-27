const express = require('express')
const router = express.Router()
const categoryController = require('../controllers/categoryController');


router.post('/createCategory', categoryController.createNewCategory);
router.get('/getCategories', categoryController.getCategories);
router.post('/updateCategory/:id', categoryController.updateCategory);
router.delete('/deleteCategory/:id', categoryController.deleteCategory);



/**
 * @swagger
 * /api/category/createCategory:
 *   post:
 *     summary: Create a new category
 *     description: Endpoint to create a new category.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               categoryName:
 *                 type: string
 *                 description: The name of the category.
 *             example:
 *               name: Example Category
 *     responses:
 *       '200':
 *         description: Category created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: string
 *                   description: Indicates success message.
 *                 category:
 *                   $ref: '#/components/schemas/Category'
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
 *       - Categories
 */


/**
 * @swagger
 * /api/category/getCategories:
 *   get:
 *     summary: Get all categories
 *     description: Endpoint to retrieve all categories.
 *     responses:
 *       '200':
 *         description: Categories fetched successfully.
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
 *                     $ref: '#/components/schemas/Category'
 *       '404':
 *         description: Category not found.
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
 *       - Categories
 */

/**
 * @swagger
 * /api/category/updateCategory/{id}:
 *   post:
 *     summary: Update a category
 *     description: Endpoint to update a category by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the category to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               categoryName:
 *                 type: string
 *                 description: The updated name of the category.
 *             example:
 *               categoryName: Updated Category Name
 *     responses:
 *       '200':
 *         description: Category updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: string
 *                   description: Indicates success message.
 *                 updatedCategory:
 *                   $ref: '#/components/schemas/Category'
 *       '404':
 *         description: Category not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
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
 *       - Categories
 */

/**
 * @swagger
 * /api/category/deleteCategory/{id}:
 *   delete:
 *     summary: Delete a category
 *     description: Endpoint to delete a category by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the category to delete.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Category deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: string
 *                   description: Indicates success message.
 *                 deletedCategory:
 *                   $ref: '#/components/schemas/Category'
 *       '404':
 *         description: Category not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
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
 *     tags:
 *       - Categories
 */



module.exports = router;