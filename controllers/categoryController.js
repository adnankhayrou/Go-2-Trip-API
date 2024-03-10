const Category = require("../models/categoriesModel");
const subCategory = require("../models/subCategoryModel");
const product = require("../models/productModel");
const { categoryValidation } = require('../requests/category.request');

const createNewCategory = async (req, res) => {
    const {error} = categoryValidation(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    try {
        const category = await Category.create(req.body);
        res.json({ success: "Category created successfully", category });

    } catch (e) {
        console.log(e);
        res.status(400).json({ error: "Something went wrong" });
    }
};

const getCategories = async (req, res) => {
    try {
        const category = await Category.find();
        if (!category) {
            return res.status(404).json({ error: "Category not found" });
        }
        res.json({success: "Category found successfully", data: category,});
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: "Something went wrong" });
    }
};

const updateCategory = async (req, res) => {
    const {error} = categoryValidation(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    try {
        const { id } = req.params;
        const today = new Date();
        const updatedCategory = await Category.findByIdAndUpdate(id, { ...req.body, updated_at: today });

        if (!updatedCategory) {
            return res.status(404).json({ error: "Category not found" });
        }
        res.json({success: "Category updated successfully", updatedCategory});
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: "Something went wrong" });
    }
};

const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCategory = await Category.findByIdAndDelete(id);
        if (!deletedCategory) {
            return res.status(404).json({ error: "Category not found" });
        }
        await product.deleteMany({ category_id: id });
        await subCategory.deleteMany({ category_id: id });
        
        res.json({success: "Category deleted successfully", deletedCategory});
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: "Something went wrong" });
    }
};



module.exports = {
    createNewCategory,
    getCategories,
    updateCategory,
    deleteCategory,
    
};