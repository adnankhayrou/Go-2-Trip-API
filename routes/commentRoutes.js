const express = require('express')
const router = express.Router()
const commentController = require('../controllers/commentController');


router.post('/createComment', commentController.createNewComment);
router.get('/getComments/:id', commentController.getCommentWithProducId);
router.get('/getAllComments', commentController.getAllComments);
router.get('/commentwithContent', commentController.getCommentWithcontent);
router.post('/updateComment/:id', commentController.updateComment);
router.delete('/deleteComment/:id', commentController.deleteComment);


module.exports = router;