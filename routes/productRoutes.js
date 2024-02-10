const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController');
const upload = require('../multer/multerConfig')


router.post('/createProduct', upload, productController.createNewProduct);
router.get('/getProduct/:id', productController.getProductWithId);
router.get('/allProduct', productController.getAllProduct);
router.patch('/updateProduct/:id', upload, productController.updateProduct);


module.exports = router;