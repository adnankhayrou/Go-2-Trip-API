const product = require("../models/productModel");
const { productValidation } = require('../requests/product.request');
const upload = require('../multer/multerConfig');

const createNewProduct = async (req, res) => {
    const {error} = productValidation(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    try {
        const Product = await product.create(req.body);
        res.json({ success: "product created successfully", Product });

    } catch (e) {
        console.log(e);
        res.status(400).json({ error: "Something went wrong" });
    }
};


module.exports = {
    createNewProduct,
};