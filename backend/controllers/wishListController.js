const Wishlist = require("../models/wishlistModel");

const Items = require("../models/itemModel");

const updateWishlist = async (req, res, next) => {
  const { user_id, product_id } = req.body;
  console.log("API update wishlist");
  try {
    if (!user_id || !product_id) {
      throw Error("Bad request");
    }

    const wishlist = await Wishlist.find({
      user_id: user_id,
      product_id: product_id,
    });

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
  console.log("API Get all wishlist items");
  try {
    const wishlistArray = await Wishlist.find({ user_id: req.params.user_id });
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
  console.log("API delete selected wishlist items");
  try {
    const response = await Wishlist.findByIdAndRemove(req.params.wishlist_id);
    res.status(200).json(response);
    res.end();
  } catch (error) {
    res.status(400).json({ error: error.message });
    res.end();
  }
};

module.exports = { updateWishlist, getWishlist, deletWishlist };
