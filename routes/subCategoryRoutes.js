const express = require('express')
const router = express.Router()
const subCategoryController = require('../controllers/subCategoryController');


router.post('/createSubCategory', subCategoryController.createNewSubCategory);
router.get('/getSubCategories', subCategoryController.getsubCategories);
router.post('/updateSubCategory/:id', subCategoryController.updateSubCategory);
router.delete('/deleteSubCategory/:id', subCategoryController.deleteSubCategory);



module.exports = router;