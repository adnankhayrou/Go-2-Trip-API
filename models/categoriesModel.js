const mongoose = require("mongoose");

const schema = {
    name: {
        type: String,
        required: true,
    },
};

const categorySchema = new mongoose.Schema(schema);
module.exports = mongoose.model("Category", categorySchema);