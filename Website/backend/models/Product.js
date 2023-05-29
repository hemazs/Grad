const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    allergens: {
        type: Array,
        default: []
    },


}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);