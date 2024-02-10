const product = require("../models/productModel");
const { productValidation } = require('../requests/product.request');

const createNewProduct = async (req, res) => {
    
    const {error} = productValidation(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    try {
        const imagePaths = req.files.map(file => file.filename);
        const productData = { ...req.body, images: imagePaths };
        
        const Product = await product.create(productData);
        res.json({ success: "Product created successfully", Product });

    } catch (e) {
        console.log(e);
        res.status(400).json({ error: "Something went wrong" });
    }
};


module.exports = {
    createNewProduct,
};