const mongoose = require("mongoose");

const schema = {
    name: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    city_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "City",
        required: true,
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    subCategory_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubCategory",
        required: true,
    },
};

const productSchema = new mongoose.Schema(schema);
module.exports = mongoose.model("Product", productSchema);