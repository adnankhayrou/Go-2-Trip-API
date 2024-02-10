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

const getCommentWithProducId = async (req, res) => {
    const { product_id } = req.params;
    try {
        const Comment = await comment.find(product_id);
        if (!Comment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json({success: "Comment found successfully", data: Comment,});
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: "Something went wrong" });
    }
};

module.exports = {
    createNewComment,
    getCommentWithProducId,
    
};