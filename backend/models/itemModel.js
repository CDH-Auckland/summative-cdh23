const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const itemSchema = new Schema({
    user_id: { type: String, require: true },
    name: { type: String, require: true },
    price: { type: Number, require: true },
    category: { type: String, require: true },
    type: { type: String, require: true },
    description: { type: String, require: true },
    stock: { type: String, require: true },
    imgUrl1: { type: String, require: true },
    imgUrl2: { type: String, require: true },
    imgUrl3: { type: String, require: true },
    imgUrl4: { type: String, require: true },
})

module.exports = mongoose.model('items', itemSchema);