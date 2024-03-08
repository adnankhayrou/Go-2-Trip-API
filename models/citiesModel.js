const mongoose = require("mongoose");

const schema = {
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

const citySchema = new mongoose.Schema(schema);
module.exports = mongoose.model("City", citySchema);