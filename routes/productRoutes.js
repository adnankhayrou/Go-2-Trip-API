const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController');

router.post('/createProduct', productController.createNewProduct);
router.get('/getProduct/:id', productController.getProductWithId);
router.get('/userProducts/:id', productController.getUserProducts);
router.get('/allProduct', productController.getAllProduct);
router.get('/productsFilter', productController.productsFilter);
router.post('/updateProduct/:id', productController.updateProduct);
router.delete('/deleteProduct/:id', productController.deleteProduct);


module.exports = router;