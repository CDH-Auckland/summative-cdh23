const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const orderSchema = new Schema({
    product_id: { type: String },
    status: { type: String },
    orderdetails_id: { type: String },
    shipping_status: { type: String },
})


module.exports = mongoose.model('order', orderSchema);