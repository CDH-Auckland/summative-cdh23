const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const cartSchema = new Schema({
    user_id: { type: String, require: true },
    product_id: { type: String, require: true },
})

module.exports = mongoose.model('carts', cartSchema);