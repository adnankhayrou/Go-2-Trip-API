const Category = require("../models/categoriesModel");
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

const getCategoryWithId = async (req, res) => {
    const { id } = req.params;
    try {
        const category = await Category.findById(id);
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
        const updatedCategory = await Category.findByIdAndUpdate(id, req.body);
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
        res.json({success: "Category deleted successfully", deletedCategory});
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: "Something went wrong" });
    }
};



module.exports = {
    createNewCategory,
    getCategoryWithId,
    updateCategory,
    deleteCategory,
    
};