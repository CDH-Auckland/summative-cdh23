const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const orderDetailsSchema = new Schema({
    user_id: { type: String, require: true },
    name: { type: String },
    address: { type: String },
    mobile: { type: String },
    shipping_type: { type: String },
    ac_no: { type: String },
})


module.exports = mongoose.model('order_details', orderDetailsSchema);