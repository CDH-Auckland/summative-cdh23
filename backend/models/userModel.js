const mongoose = require('mongoose');



const Schema = mongoose.Schema;

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
})



module.exports = mongoose.model('user', userSchema);