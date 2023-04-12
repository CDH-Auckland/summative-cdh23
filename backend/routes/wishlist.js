const express = require('express');

const router = express.Router();

//controller function



const { updateWishlist, deletWishlist } = require('../controllers/wishListController');


//update wishlist
router.put('/', updateWishlist);

//account delete
router.delete('/:id', deletWishlist);

module.exports = router;