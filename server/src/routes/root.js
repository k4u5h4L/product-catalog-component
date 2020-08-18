const express = require("express");

const router = express.Router();

const message = {
    routesAvailable: ["/catalog", "/product", "/search"],
};

router.get("/", (req, res) => {
    res.send(message);
});

router.post("/", (req, res) => {
    res.send(message);
});

module.exports = router;
