const mongoose = require("mongoose");

const schema = {
    content: {
        type: String,
        required: true,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
};

const commentSchema = new mongoose.Schema(schema);
module.exports = mongoose.model("Comment", commentSchema);