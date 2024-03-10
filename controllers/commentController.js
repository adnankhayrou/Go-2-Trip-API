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

const getCommentWithcontent = async (req, res) => {
    const { content } = req.query;
    try {
        const Comment = await comment.find({ content: { $regex: content } }).populate("user_id");
        if (!Comment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json({success: "Comment found successfully", data: Comment,});
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: "Something went wrong" });
    }
};

const getAllComments = async (req, res) => {
    try {
        const Comment = await comment.find().populate("user_id");
        if (!Comment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json({success: "Comment found successfully", data: Comment,});
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: "Something went wrong" });
    }
};

const updateComment = async (req, res) => {
    const {error} = commentValidation(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    try {
        const { id } = req.params;
        const today = new Date();
        const Comment = await comment.findByIdAndUpdate(id, { ...req.body, updated_at: today });
        if (!Comment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json({success: "Comment updated successfully", Comment});
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: "Something went wrong" });
    }
};

const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedComment = await comment.findByIdAndDelete(id);
        if (!deletedComment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json({success: "Comment deleted successfully", deletedComment});
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: "Something went wrong" });
    }
};

module.exports = {
    createNewComment,
    getCommentWithProducId,
    getAllComments,
    updateComment,
    deleteComment,
    getCommentWithcontent
    
};