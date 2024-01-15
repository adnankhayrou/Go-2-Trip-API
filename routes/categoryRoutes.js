const express = require('express')
const router = express.Router()
const categoryController = require('../controllers/categoryController');


router.post('/createCategory', categoryController.createNewCategory);
router.get('/getCategory/:id', categoryController.getCategoryWithId);


module.exports = router;