//Import model schema for items
const Items = require('../models/itemModel');

const Wishlist = require("../models/wishlistModel");

const viewListed = async (req, res, next) => {

    console.log("user id", req.params.user_id);

    try {
        const items = await Items.find({ user_id: req.params.user_id });
        console.log("items", items);
        console.log("items.length", items.length);
        if (!items) {
            throw Error("List is empty");
        } else {
            res.status(200).json(items);
            res.end();
        }
    } catch (error) {
        res.status(400).json({ error: error.message });

        res.end();
    }


}

const editListed = async (req, res, next) => {

}

const deleteListed = async (req, res, next) => {
    console.log("Product id", req.params.id);
    try {
        const wishlist = await Wishlist.deleteMany({ product_id: req.params.id });


        const response = await Items.findByIdAndRemove(req.params.id);
        res.status(200).json("Your listing removed successfully");
        res.end();
    } catch (error) {
        res.status(400).json({ error: error.message });
        res.end();
    }

}

module.exports = { viewListed, editListed, deleteListed };