const express = require('express')
const router = express.Router()
const commentController = require('../controllers/commentController');


router.post('/createComment', commentController.createNewComment);
router.get('/getComment/:id', commentController.getCommentWithProducId);


module.exports = router;