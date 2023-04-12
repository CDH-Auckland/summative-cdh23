const Wishlist = require("../models/wishlistModel");

const Items = require("../models/itemModel");


const updateWishlist = async (req, res, next) => {
    const { user_id, product_id } = req.body;

    console.log(user_id, product_id);

    try {
        if (!user_id || !product_id) {
            throw Error("Bad request");
        }

        const wishlist = await Wishlist.find({
            user_id: user_id,
            product_id: product_id,
        });

        console.log(Object.keys(wishlist).length === 0);

        if (Object.keys(wishlist).length === 0) {
            const item = await Items.findById(product_id);

            const { name, price, imgUrl1 } = item;

            console.log(name, price, imgUrl1);

            const ws = await Wishlist.create({
                user_id,
                product_id,
                name,
                price,
                imgUrl1,
            });

            const msg = "Add to wishlist";

            res.status(200).json({ msg: msg });

            res.end();
        } else {
            const msg = "Already in the wishlist";

            res.status(200).json({ msg: msg });

            res.end();
        }
    } catch (error) {
        res.status(400).json({ error: error.message });

        res.end();
    }
};

const getWishlist = async (req, res, next) => {
    console.log(req.params.user_id);

    try {
        const wishlistArray = await Wishlist.find({ user_id: req.params.user_id });

        console.log("wishlistArray", wishlistArray);

        if (Object.keys(wishlistArray).length === 0) {
            throw Error("Wishlist empty");
        } else {
            res.status(200).json(wishlistArray);

            res.end();
        }
    } catch (error) {
        res.status(400).json({ error: error.message });

        res.end();
    }
};




const deletWishlist = async (req, res, next) => {
    console.log("user id", req.params.user_id);

    console.log("wishlist id ", req.params.wishlist_id);

    try {
        const response = await Wishlist.findByIdAndRemove(req.params.wishlist_id);

        console.log(Object.keys(response).length === 0);

        res.status(200).json(response);

        res.end();
    } catch (error) {
        res.status(400).json({ error: error.message });

        res.end();
    }
};

module.exports = { updateWishlist, getWishlist, deletWishlist };