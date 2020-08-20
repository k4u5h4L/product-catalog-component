const express = require("express");

const Catalog = require("../models/categories.model");

const router = express.Router();

router.get("/", (req, res) => {
    Catalog.find({})
        .limit(4)
        .then((data) => res.send(data))
        .catch((err) => res.status(400).json("Error: " + err));

    // Catalogue.find({}, (err, pdt) => {
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
