const express = require('express');
const router = express.Router();

//controller function
const { getCart, addCart, deleteCart } = require('../controllers/cartController');


//View all item from cart
router.get('/user_id', getCart);

//Add to cart
router.put('/', addCart);

//Delete selected item from cart
router.delete('/:id', deleteCart);

module.exports = router;