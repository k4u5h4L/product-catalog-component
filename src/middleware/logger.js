const logger = (req, res, next) => {
    console.log(`Endpoint hit: ${req.url}`);
    // console.log(req.url);

    next();
};

module.exports = logger;
