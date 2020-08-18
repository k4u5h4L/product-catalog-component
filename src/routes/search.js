const express = require("express");

const Product = require("../models/product.model");

const router = express.Router();

router.get("/:searchQuery", (req, res) => {
    const searchQuery = req.params.searchQuery.trim();

    console.log(searchQuery);

    Product.find({ title: searchQuery })
        .then((data) => {
            if (data.length != 0) {
                res.send(data);
            } else {
                res.redirect("/notFound");
            }
        })
        .catch((err) => {
            console.error(err);
        });
});

router.post("/", (req, res) => {
    res.redirect(`/search/${req.body.search}`);
});

module.exports = router;
