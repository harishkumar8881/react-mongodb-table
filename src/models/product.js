const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },

    description: {
        type: String,
        required: true,
        trim: true,
    },

    price: {
        type: String,
        required: true,
        trim: true,
    },

    productImage: {
        type: String,
        required: false,
    }

}, {timestamps: true});

module.exports = mongoose.model('Product', productSchema);