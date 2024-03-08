const mongoose = require("mongoose");

const schema = {
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    name: {
        type: String,
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

const subCategorySchema = new mongoose.Schema(schema);
module.exports = mongoose.model("SubCategory", subCategorySchema);