const product = require("../models/productModel");
const comment = require("../models/commentModel");
const { productValidation } = require('../requests/product.request');
const { storeImageGetPath } = require("../utils/tools");

const createNewProduct = async (req, res) => {
    const {error} = productValidation(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    try {
        const getImagePaths = req.body.images.map(async file => {
            return await storeImageGetPath(file);
        });

        const imagePaths = await Promise.all(getImagePaths);
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

const getUserProducts = async (req, res) => {
    const { id } = req.params;
    try {
        const Product = await product.find({user_id: id})
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

const productsFilter = async (req, res) => {
    const { name, category_id, subCategory_id, city_id } = req.query;
    const query = {};

    if (name) {
        query.name = { $regex: name };
    }

    if (category_id) {
        query.category_id = category_id;
    }

    if (subCategory_id) {
        query.subCategory_id = subCategory_id;
    }

    if (city_id) {
        query.city_id = city_id;
    }

    try {
        const products = await product.find(query)
            .populate("user_id")
            .populate("city_id")
            .populate("category_id")
            .populate("subCategory_id");

        if (!products || products.length === 0) {
            return res.status(404).json({ error: "Products not found" });
        }

        res.json({ success: "Products found successfully", data: products });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};


const updateProduct = async (req, res) => {
    console.log(req.body);

    const {error} = productValidation(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    try {
        const oldImages = req.body.oldImages
        const getImagePaths = req.body.images.map(async file => {
            return await storeImageGetPath(file);
        });

        const imagePaths = await Promise.all(getImagePaths);
        const today = new Date();
        const productData = {...req.body, images: [...imagePaths, ...oldImages], updated_at: today };

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

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ error: "Product not found" });
        }
        await comment.deleteMany({ product_id: id });

        res.json({success: "Product deleted successfully", deletedProduct});
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: "Something went wrong" });
    }
};



module.exports = {
    createNewProduct,
    getProductWithId,
    getUserProducts,
    getAllProduct,
    productsFilter,
    updateProduct,
    deleteProduct,
};