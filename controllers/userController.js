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
    deleteUser
}