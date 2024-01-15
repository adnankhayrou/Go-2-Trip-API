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
};

const subCategorySchema = new mongoose.Schema(schema);
module.exports = mongoose.model("SubCategory", subCategorySchema);