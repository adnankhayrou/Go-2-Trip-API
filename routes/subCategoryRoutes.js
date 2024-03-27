const express = require('express')
const router = express.Router()
const subCategoryController = require('../controllers/subCategoryController');


router.post('/createSubCategory', subCategoryController.createNewSubCategory);
router.get('/getSubCategories/:id', subCategoryController.getsubCategories);
router.get('/getAllSubCategories', subCategoryController.getAllsubCategories);
router.post('/updateSubCategory/:id', subCategoryController.updateSubCategory);
router.delete('/deleteSubCategory/:id', subCategoryController.deleteSubCategory);


/**
 * @swagger
 * /api/subCategory/createSubCategory:
 *   post:
 *     summary: Create a new subcategory
 *     description: Endpoint to create a new subcategory.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               subCategoryName:
 *                 type: string
 *                 description: The name of the subcategory.
 *             example:
 *               subCategoryName: Example Subcategory
 *     responses:
 *       '200':
 *         description: Subcategory created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: string
 *                   description: Indicates success message.
 *                 sub_category:
 *                   $ref: '#/components/schemas/SubCategory'
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
 *       - SubCategories
 */


/**
 * @swagger
 * /api/subCategory/getSubCategories/{id}:
 *   get:
 *     summary: Get subcategories by category ID
 *     description: Endpoint to retrieve subcategories for a specific category by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the category to get subcategories for.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Subcategories fetched successfully.
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
 *                     $ref: '#/components/schemas/SubCategory'
 *       '404':
 *         description: Subcategories not found.
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
 *       - SubCategories
 */


/**
 * @swagger
 * /api/subCategory/getAllSubCategories:
 *   get:
 *     summary: Get all subcategories
 *     description: Endpoint to retrieve all subcategories.
 *     responses:
 *       '200':
 *         description: Subcategories fetched successfully.
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
 *                     $ref: '#/components/schemas/SubCategory'
 *       '404':
 *         description: Subcategories not found.
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
 *       - SubCategories
 */



/**
 * @swagger
 * /api/subCategory/updateSubCategory/{id}:
 *   post:
 *     summary: Update a subcategory
 *     description: Endpoint to update a subcategory by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the subcategory to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               subCategoryName:
 *                 type: string
 *                 description: The updated name of the subcategory.
 *             example:
 *               subCategoryName: Updated Subcategory Name
 *     responses:
 *       '200':
 *         description: Subcategory updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: string
 *                   description: Indicates success message.
 *                 updatedSubCategory:
 *                   $ref: '#/components/schemas/SubCategory'
 *       '404':
 *         description: Subcategory not found.
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
 *       - SubCategories
 */

/**
 * @swagger
 * /api/subCategory/deleteSubCategory/{id}:
 *   delete:
 *     summary: Delete a subcategory
 *     description: Endpoint to delete a subcategory by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the subcategory to delete.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Subcategory deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: string
 *                   description: Indicates success message.
 *                 deletedSubCategory:
 *                   $ref: '#/components/schemas/SubCategory'
 *       '404':
 *         description: Subcategory not found.
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
 *       - SubCategories
 */



module.exports = router;