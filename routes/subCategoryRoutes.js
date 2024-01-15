const express = require('express')
const router = express.Router()
const subCategoryController = require('../controllers/subCategoryController');


router.post('/createSubCategory', subCategoryController.createNewSubCategory);
router.get('/getSubCategory/:id', subCategoryController.getsubCategoryWithId);



module.exports = router;