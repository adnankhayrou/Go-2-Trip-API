const comment = require("../models/commentModel");
const { commentValidation } = require('../requests/comment.request');

const createNewComment = async (req, res) => {
    const {error} = commentValidation(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    try {
        const Comment = await comment.create(req.body);
        res.json({ success: "comment created successfully", Comment });

    } catch (e) {
        console.log(e);
        res.status(400).json({ error: "Something went wrong" });
    }
};

module.exports = {
    createNewComment,
    
};