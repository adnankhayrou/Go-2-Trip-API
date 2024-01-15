const express = require('express')
const router = express.Router()
const categoryController = require('../controllers/categoryController');


router.post('/createCategory', categoryController.createNewCategory);
router.get('/getCategory/:id', categoryController.getCategoryWithId);
router.post('/updateCategory/:id', categoryController.updateCategory);


module.exports = router;