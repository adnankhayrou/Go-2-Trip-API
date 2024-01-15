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



module.exports = {
    createNewCategory,
    
};