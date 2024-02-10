const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController');
const upload = require('../multer/multerConfig')


router.post('/createProduct', upload, productController.createNewProduct);


module.exports = router;