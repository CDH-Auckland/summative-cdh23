const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const wishlistSchema = new Schema({
    user_id: { type: String, require: true },
    product_id: { type: String, require: true },
    name: { type: String, require: true },
    price: { type: Number, require: true },
    imgUrl1: { type: String, require: true },
})


module.exports = mongoose.model('wishlist', wishlistSchema);