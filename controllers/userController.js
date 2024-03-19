const userModel = require('../models/userModel')
const comment = require("../models/commentModel");
const product = require("../models/productModel");


async function getAllUsers(req, res){
    try {
        const Users = await userModel.find();
        if (!Users) {
            return res.status(404).json({ error: "Users not found" });
        }
        res.json({success: "Users found successfully", data: Users,});
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: "Something went wrong" });
    }
}

const getUserWithName = async (req, res) => {
    const { name } = req.query;
    try {
        const User = await userModel.find({ name: { $regex: name } });
        if (!User) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json({success: "User found successfully", data: User,});
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: "Something went wrong" });
    }
};

async function updateUserName(req, res) {
    try {
        const name = req.body.name;
        const { id } = req.params;

        const updatedUser = await userModel.findByIdAndUpdate(id, { name: name }, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json({ success: "User name updated successfully", updatedUser });
    } catch (e) {
        console.log(e);
        if (e.name === 'CastError') {
            return res.status(400).json({ error: "Invalid user ID" });
        }
        res.status(500).json({ error: "Something went wrong" });
    }
}

async function deleteUser(req, res) {
    try {
        const { id } = req.params;

        const deletedUser = await userModel.findByIdAndDelete(id, { role: 'Seller' });
        if (!deletedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        await product.deleteMany({ user_id: id });
        await comment.deleteMany({ user_id: id });

        res.json({ success: "User, products, and associated comments deleted successfully", deletedUser });
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: "Something went wrong" });
    }
}


module.exports = {
    getAllUsers,
    getUserWithName,
    updateUserName,
    deleteUser
}