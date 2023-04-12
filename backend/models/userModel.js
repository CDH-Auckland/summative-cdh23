const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const orderSchema = new Schema({
    product_id: { type: String },
    status: { type: String },
    orderdetails_id: { type: String }
})



const userSchema = new Schema({
    first_name: { type: String },
    last_name: { type: String },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    cart: [{ product_id: { type: String } }],
    wishlist: [{ product_id: { type: String } }],
    listed: [{ product_id: { type: String } }],
    order: [orderSchema],

})



module.exports = mongoose.model('user', userSchema);