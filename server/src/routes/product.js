const express = require("express");

const Product = require("../models/product.model");

const router = express.Router();

router.get("/", (req, res) => {
    Product.find({})
        .limit(Math.floor(Math.random()*(6-1)+1))
        .then((data) => res.send(data))
        .catch((err) => res.status(400).json("Error: " + err));

    // Product.find({}, (err, pdt) => {
    //     if (err) {
    //         res.send("Error");
    //         console.log(err);
    //     } else {
    //         res.send(pdt);
    //     }
    // });
});

router.post("/", (req, res) => {
    console.log(req.body);
    res.send({ message: "DONE" });
});

module.exports = router;
