const userModel = require('../models/userModel')
const comment = require("../models/commentModel");
const product = require("../models/productModel");
const subCategory = require("../models/subCategoryModel");
const Category = require("../models/categoriesModel");
const City = require("../models/citiesModel");

const statistics = async (req, res) => {
    try {
        const comments = await comment.find();
        const products = await product.find();
        const users = await userModel.find();
        const subCategories = await subCategory.find();
        const categories = await Category.find();
        const cities = await City.find();
        
        res.json({success: "Statistics founded successfully", comments, products, users, subCategories, categories, cities});
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: "Something went wrong" });
    }
};

module.exports = {
    statistics,
};