// main App.js file

import React, { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./navbar/Navbar";
import Greeting from "./greeting/Greeting";
import Location from "./location/Location";
// import Category from "./category/Category"; // copied it to App.js for better state management
import Product from "./product/Product";
import Footer from "./footer/Footer";

const App = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [currCate, setCurrCate] = useState("Wyatt Residency");

    useEffect(() => {
        const getProduct = async () => {
            const res = await fetch(`http://127.0.0.1:8000/product/${currCate}`);
            const data = await res.json();

            console.log(data);
            setProducts(data.sort(() => Math.random() - 0.5));
            console.log(`currCate: ${currCate}`);
        };

        getProduct();
    }, [currCate]);

    useEffect(() => {
        const getCategory = async () => {
            const res = await fetch(`http://127.0.0.1:8000/catalog/`);
            const data = await res.json();

            // console.log(data);
            setCategories(data);
        };

        getCategory();
    }, []);

    return (
        <div>
            <Navbar />
            <Greeting />
            <Location />
            <div className="container">
                <div className="row">
                    {/* <Category /> */}
                    <div className="col-12 col-sm-3">
                        <div className="card bg-light mb-3">
                            <div className="card-header bg-primary text-white text-uppercase">
                                <i className="fa fa-list"></i> Categories
                            </div>
                            <ul className="list-group category_block">
                                {categories.map((category, index) => (
                                    <div key={index}>
                                        <li
                                            className="list-group-item"
                                            onClick={() => {
                                                // console.log(`${category.title} CLICKED!`);
                                                setCurrCate(category.title);
                                            }}
                                        >
                                            <a>{category.title}</a>
                                        </li>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="col">
                        <div className="row">
                            {products.map((product, index) => (
                                <Product
                                    key={index}
                                    productTitle={product.title}
                                    imageSrc={product.imageSrc}
                                    description={product.content}
                                    pricingText={product.price}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default App;
