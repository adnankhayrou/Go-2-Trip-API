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

const getProductWithId = async (req, res) => {
    const { id } = req.params;
    try {
        const Product = await product.findById(id)
        .populate("user_id")
        .populate("city_id")
        .populate("category_id")
        .populate("subCategory_id");
        
        if (!Product) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.json({success: "Product found successfully", data: Product});
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: "Something went wrong" });
    }
};


const getAllProduct = async (req, res) => {
    try {
        const Product = await product.find()
        .populate("user_id")
        .populate("city_id")
        .populate("category_id")
        .populate("subCategory_id");

        if (!Product) {
            return res.status(404).json({ error: "Products not found" });
        }
        res.json({success: "Products Founded Successfully", data: Product});
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: "Something went wrong" });
    }
};

const updateProduct = async (req, res) => {
    console.log(req.body);
    const {error} = productValidation(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    try {
        const imagePaths = req.files.map(file => file.filename);
        const productData = { ...req.body, images: imagePaths };

        const { id } = req.params;
        const updatedProduct = await product.findByIdAndUpdate(id, productData);
        if (!updatedProduct) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.json({success: "Product updated successfully", updatedProduct});
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: "Something went wrong" });
    }
};


module.exports = {
    createNewProduct,
    getProductWithId,
    getAllProduct,
    updateProduct,
};