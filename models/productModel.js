const mongoose = require("mongoose");

const schema = {
    name: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
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
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
};

const productSchema = new mongoose.Schema(schema);
module.exports = mongoose.model("Product", productSchema);