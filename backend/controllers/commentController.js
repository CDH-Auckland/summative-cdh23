
const Comment = require('../models/commentModel');

const User = require('../models/userModel');



const createComment = async (req, res, next) => {
    console.log("API create new comment");
    const { user_id, product_id, comment } = req.body;
    console.log("Product id", product_id);
    console.log("Comment", comment);
    console.log("user_id", user_id);

    try {
        const user = await User.find({ _id: user_id }).select("-password");
        const responce = await Comment.create({ user_id, product_id, comment, email: user[0].email });
        res.status(200).json(responce);
        res.end();
    } catch (error) {
        res.status(400).json({ error: error.message });
        res.end();
    }
}

const getComment = async (req, res, next) => {
    console.log("API get all comments");
    const product_id = req.params.product_id;
    console.log("Product id", product_id);

    try {
        const responce = await Comment.find({ product_id: product_id });
        res.status(200).json(responce);
        res.end();
    } catch (error) {
        res.status(400).json({ error: error.message });
        res.end();
    }
}

const deleteComment = async (req, res, next) => {

}


module.exports = { createComment, deleteComment, getComment }