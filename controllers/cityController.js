const City = require("../models/citiesModel");
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

const getCityWithId = async (req, res) => {
    const { id } = req.params;
    try {
        const city = await City.findById(id);
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
        const updatedCity = await City.findByIdAndUpdate(id, req.body);
        if (!updatedCity) {
            return res.status(404).json({ error: "City not found" });
        }
        res.json({success: "City updated successfully", updatedCity});
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: "Something went wrong" });
    }
};



module.exports = {
    createNewCity,
    getCityWithId,
    updateCity,
};