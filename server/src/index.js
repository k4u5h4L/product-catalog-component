// main server file

require("dotenv").config();
var fs= require('fs');
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const logger = require("./middleware/logger");
const root = require("./routes/root");
const catalog = require("./routes/catalog");
const product = require("./routes/product");
const search = require("./routes/search");
const notFound = require("./routes/notFound");
const Category = require('./models/categories.model')
const Product = require('./models/product.model')
const app = express();
const PORT = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

const DBName = `FirstImpressionDB`;
mongoose.connect(`mongodb://localhost:27017/${DBName}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

// mongoose.connect(process.env.MONGO_PASSWD, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
// });

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
});

app.use(logger);

app.use("/", root);

app.use("/catalog", catalog);

app.use("/product", product);

app.use("/search", search);

app.use("*", notFound);

app.listen(process.env.PORT || PORT, () => console.log(`Server is running on port ${PORT}`));
