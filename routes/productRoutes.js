const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController');
const upload = require('../multer/multerConfig')


router.post('/createProduct', upload, productController.createNewProduct);
router.get('/getProduct/:id', productController.getProductWithId);
router.get('/userProducts/:id', productController.getUserProducts);
router.get('/allProduct', productController.getAllProduct);
router.patch('/updateProduct/:id', upload, productController.updateProduct);
router.delete('/deleteProduct/:id', productController.deleteProduct);


module.exports = router;