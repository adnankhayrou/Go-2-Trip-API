const subCategory = require("../models/subCategoryModel");
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

const getsubCategoryWithId = async (req, res) => {
    const { id } = req.params;
    try {
        const sub_category = await subCategory.findById(id);
        if (!sub_category) {
            return res.status(404).json({ error: "subCategory not found" });
        }
        res.json({success: "subCategory found successfully", data: sub_category,});
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: "Something went wrong" });
    }
};



module.exports = {
    createNewSubCategory,
    getsubCategoryWithId,
    
};