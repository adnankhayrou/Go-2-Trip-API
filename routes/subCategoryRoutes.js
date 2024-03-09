const express = require('express')
const router = express.Router()
const subCategoryController = require('../controllers/subCategoryController');


router.post('/createSubCategory', subCategoryController.createNewSubCategory);
router.get('/getSubCategories/:id', subCategoryController.getsubCategories);
router.get('/getAllSubCategories', subCategoryController.getAllsubCategories);
router.post('/updateSubCategory/:id', subCategoryController.updateSubCategory);
router.delete('/deleteSubCategory/:id', subCategoryController.deleteSubCategory);



module.exports = router;