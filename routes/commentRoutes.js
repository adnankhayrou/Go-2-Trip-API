const express = require('express')
const router = express.Router()
const commentController = require('../controllers/commentController');


router.post('/createComment', commentController.createNewComment);
router.get('/getComments/:id', commentController.getCommentWithProducId);
router.get('/getAllComments', commentController.getAllComments);
router.get('/commentwithContent', commentController.getCommentWithcontent);
router.post('/updateComment/:id', commentController.updateComment);
router.delete('/deleteComment/:id', commentController.deleteComment);




/**
 * @swagger
 * /api/comment/createComment:
 *   post:
 *     summary: Create a new comment
 *     description: Endpoint to create a new comment.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 description: The content of the comment.
 *               userId:
 *                 type: string
 *                 description: The ID of the user who posted the comment.
 *               postId:
 *                 type: string
 *                 description: The ID of the post the comment belongs to.
 *             example:
 *               content: This is a comment.
 *               userId: 60a2c3d19a9bc516e48f2b14
 *               postId: 60a2c3d19a9bc516e48f2b15
 *     responses:
 *       '200':
 *         description: Comment created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: string
 *                   description: Indicates success message.
 *                 Comment:
 *                   $ref: '#/components/schemas/Comment'
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
 *       - Comments
 */



/**
 * @swagger
 * /api/comment/getComments/{id}:
 *   get:
 *     summary: Get comments by product ID
 *     description: Endpoint to retrieve comments for a specific product by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product to get comments for.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Comments fetched successfully.
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
 *                     $ref: '#/components/schemas/Comment'
 *       '404':
 *         description: Comments not found.
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
 *       - Comments
 */


/**
 * @swagger
 * /api/comment/getAllComments:
 *   get:
 *     summary: Get all comments
 *     description: Endpoint to retrieve all comments.
 *     responses:
 *       '200':
 *         description: Comments fetched successfully.
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
 *                     $ref: '#/components/schemas/Comment'
 *       '404':
 *         description: Comments not found.
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
 *       - Comments
 */



/**
 * @swagger
 * /api/comment/commentwithContent:
 *   get:
 *     summary: Get comments by content
 *     description: Endpoint to retrieve comments containing specified content.
 *     parameters:
 *       - in: query
 *         name: content
 *         required: true
 *         description: Content to search for in comments.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Comments fetched successfully.
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
 *                     $ref: '#/components/schemas/Comment'
 *       '404':
 *         description: Comments not found.
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
 *       - Comments
 */


/**
 * @swagger
 * /api/comment/updateComment/{id}:
 *   post:
 *     summary: Update a comment
 *     description: Endpoint to update a comment by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the comment to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 description: The updated content of the comment.
 *             example:
 *               content: Updated comment content.
 *     responses:
 *       '200':
 *         description: Comment updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: string
 *                   description: Indicates success message.
 *                 Comment:
 *                   $ref: '#/components/schemas/Comment'
 *       '404':
 *         description: Comment not found.
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
 *       - Comments
 */


/**
 * @swagger
 * /api/comment/deleteComment/{id}:
 *   delete:
 *     summary: Delete a comment
 *     description: Endpoint to delete a comment by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the comment to delete.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Comment deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: string
 *                   description: Indicates success message.
 *                 deletedComment:
 *                   $ref: '#/components/schemas/Comment'
 *       '404':
 *         description: Comment not found.
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
 *       - Comments
 *    
 */




module.exports = router;