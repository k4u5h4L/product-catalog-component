const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const catalogSchema = new Schema({
    imageSrc: String,
    title: String,
    description: String,
    locationText: String,
    pricingText: String,
    rating: Number,
});

const Catalog = mongoose.model("Catalog", catalogSchema);

module.exports = Catalog;
