const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController');


router.get('/getAllUsers',userController.getAllUsers)
router.get('/userwithName', userController.getUserWithName)
router.post('/updateUser/:id',userController.updateUserName)
router.delete('/deleteUser/:id',userController.deleteUser)



/**
 * @swagger
 * /api/user/getAllUsers:
 *   get:
 *     summary: Get all users
 *     description: Retrieve all users.
 *     responses:
 *       '200':
 *         description: Users found successfully.
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
 *                     $ref: '#/components/schemas/User'
 *       '404':
 *         description: Users not found.
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
 *       - Users
 */


/**
 * @swagger
 * /api/user/userwithName:
 *   get:
 *     summary: Get user by name
 *     description: Retrieve user(s) by name.
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Name of the user to search for.
 *     responses:
 *       '200':
 *         description: User(s) found successfully.
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
 *                     $ref: '#/components/schemas/User'
 *       '404':
 *         description: User not found.
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
 *       - Users
 */



/**
 * @swagger
 * /api/user/updateUser/{id}:
 *   post:
 *     summary: Update user name
 *     description: Endpoint to update the name of an existing user.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The new name for the user.
 *             example:
 *               name: New User Name
 *     responses:
 *       '200':
 *         description: User name updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: string
 *                   description: Indicates success message.
 *                 updatedUser:
 *                   $ref: '#/components/schemas/User'
 *       '404':
 *         description: User not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 *       '400':
 *         description: Invalid user ID or something went wrong.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
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
 *       - Users
 */


/**
 * @swagger
 * /api/user/deleteUser/{id}:
 *   delete:
 *     summary: Delete user
 *     description: Endpoint to delete an existing user along with their associated products and comments.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to delete.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: User, products, and associated comments deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: string
 *                   description: Indicates success message.
 *                 deletedUser:
 *                   $ref: '#/components/schemas/User'
 *       '404':
 *         description: User not found.
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
 *       - Users
 */


module.exports = router