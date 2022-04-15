const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    title: String,
    description: String,
    category: String,
    price: Number,
    sale_price: Number 
});

module.exports =  mongoose.model('product', ProductSchema);