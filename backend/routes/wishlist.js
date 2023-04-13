const express = require("express");

const router = express.Router();

//controller function

const {
  updateWishlist,
  getWishlist,
  deletWishlist,
} = require("../controllers/wishListController");

//update wishlist
router.put("/", updateWishlist);

router.get("/:user_id", getWishlist);

//account delete
router.delete("/:user_id/:wishlist_id", deletWishlist);

module.exports = router;
