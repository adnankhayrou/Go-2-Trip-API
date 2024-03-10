const City = require("../models/citiesModel");
const product = require("../models/productModel");
const { categoryValidation } = require('../requests/category.request');

const createNewCity = async (req, res) => {
    const {error} = categoryValidation(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    try {
        const city = await City.create(req.body);
        res.json({ success: "City created successfully", city });

    } catch (e) {
        console.log(e);
        res.status(400).json({ error: "Something went wrong" });
    }
};

const getCities = async (req, res) => {
    try {
        const city = await City.find();
        if (!city) {
            return res.status(404).json({ error: "City not found" });
        }
        res.json({success: "City found successfully", data: city,});
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: "Something went wrong" });
    }
};

const updateCity = async (req, res) => {
    const {error} = categoryValidation(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    try {
        const { id } = req.params;
        const today = new Date();
        const updatedCity = await City.findByIdAndUpdate(id, { ...req.body, updated_at: today });
        if (!updatedCity) {
            return res.status(404).json({ error: "City not found" });
        }
        res.json({success: "City updated successfully", updatedCity});
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: "Something went wrong" });
    }
};

const deleteCity = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCity = await City.findByIdAndDelete(id);
        if (!deletedCity) {
            return res.status(404).json({ error: "City not found" });
        }
        await product.deleteMany({ city_id: id });

        res.json({success: "City deleted successfully", deletedCity});
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: "Something went wrong" });
    }
};



module.exports = {
    createNewCity,
    getCities,
    updateCity,
    deleteCity
};