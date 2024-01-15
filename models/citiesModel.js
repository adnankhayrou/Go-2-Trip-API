const mongoose = require("mongoose");

const schema = {
    name: {
        type: String,
        required: true,
    },
};

const citySchema = new mongoose.Schema(schema);
module.exports = mongoose.model("City", citySchema);