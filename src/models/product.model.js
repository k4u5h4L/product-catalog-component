const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
    imageSrc: String,
    title: String,
    content: String,
    price: String,
    rating: String,
    url: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
