
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    user_id: { type: String, require: true },
    product_id: { type: String, require: true },
    comment: { type: String, require: true },
    email: {
        type: String,
        require: true,
    },
})

module.exports = mongoose.model('comment', commentSchema);