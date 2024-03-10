const subCategory = require("../models/subCategoryModel");
const product = require("../models/productModel");
const { subCategoryValidation } = require('../requests/subCategory.request');

const createNewSubCategory = async (req, res) => {
    const {error} = subCategoryValidation(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    try {
        const sub_category = await subCategory.create(req.body);
        res.json({ success: "subCategory created successfully", sub_category });

    } catch (e) {
        console.log(e);
        res.status(400).json({ error: "Something went wrong" });
    }
};

const getsubCategories = async (req, res) => {
    const { id } = req.params;
    try {
        if(id){
            const sub_category = await subCategory.find({category_id: id});
            if (!sub_category) {
                return res.status(404).json({ error: "SubCategory not found" });
            }
            res.json({success: "SubCategory found successfully", data: sub_category,});
        }
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: "Something went wrong" });
    }
};

const getAllsubCategories = async (req, res) => {
    try {
        const sub_category = await subCategory.find().populate("category_id");
        if (!sub_category) {
            return res.status(404).json({ error: "SubCategory not found" });
        }
        res.json({success: "SubCategory found successfully", data: sub_category,});

    } catch (e) {
        console.log(e);
        res.status(400).json({ error: "Something went wrong" });
    }
};

const updateSubCategory = async (req, res) => {
    const {error} = subCategoryValidation(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    try {
        const { id } = req.params;
        const today = new Date();
        const updatedSubCategory = await subCategory.findByIdAndUpdate(id, { ...req.body, updated_at: today });
        if (!updatedSubCategory) {
            return res.status(404).json({ error: "SubCategory not found" });
        }
        res.json({success: "SubCategory updated successfully", updatedSubCategory});
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: "Something went wrong" });
    }
};


const deleteSubCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedSubCategory = await subCategory.findByIdAndDelete(id);
        if (!deletedSubCategory) {
            return res.status(404).json({ error: "SubCategory not found" });
        }
        await product.deleteMany({ subCategory_id: id });

        res.json({success: "SubCategory deleted successfully", deletedSubCategory});
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: "Something went wrong" });
    }
};



module.exports = {
    createNewSubCategory,
    getsubCategories,
    updateSubCategory,
    deleteSubCategory,
    getAllsubCategories

};