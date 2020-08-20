// main App.js file

import React, { useState, useEffect, forceUpdate } from "react";
import "./App.css";

import Navbar from "./navbar/Navbar";
import Cart from "./cart/Cart";
import Greeting from "./greeting/Greeting";
import Location from "./location/Location";
// import Category from "./category/Category"; // copied it to App.js for better state management
import Product from "./product/Product";

const App = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [currCate, setCurrCate] = useState("Wyatt Residency");
    const [sortNo, setSortNo] = useState("random");
    // const [cartNo, setCartNo] = useState(0);

    useEffect(() => {
        const getProduct = async () => {
            const res = await fetch(`http://127.0.0.1:8000/product/${currCate}`);
            const data = await res.json();

            console.log(data);
            setProducts(data.sort(() => Math.random() - 0.5));
            // console.log(`currCate: ${currCate}`);
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

    const sortAscending = () => {
        if (sortNo == "ascending") {
            console.log(`Already sorted ascending.`);
            return;
        }

        setProducts(products.sort((a, b) => a.price - b.price));
        // to sort the array of objects w.r.t. the price attribute

        console.log(products);
    };

    const sortDescending = () => {
        if (sortNo == "descending") {
            console.log(`Already sorted descending.`);
            return;
        }

        setProducts(products.sort((a, b) => b.price - a.price));
        // to sort the array of objects w.r.t. the price attribute

        console.log(products);
    };

    const sortRandom = () => {
        if (sortNo == "random") {
            console.log(`Already randomized.`);
            return;
        }
        setProducts(products.sort(() => Math.random() - 0.5));

        console.log(products);
    };

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
                        <div className="card bg-light mb-3">
                            <div className="card-header bg-success text-white text-uppercase">Sort by</div>
                            <div className="card-body">
                                <ul className="list-group category_block">
                                    <li
                                        className="list-group-item"
                                        onClick={() => {
                                            console.log(`Sort clicked ascending`);
                                            sortAscending();
                                            setSortNo("ascending");
                                            // console.log(sortNo);
                                        }}
                                    >
                                        <a>Price (ascending)</a>
                                    </li>
                                    <li
                                        className="list-group-item"
                                        onClick={() => {
                                            console.log(`Sort clicked descending`);
                                            sortDescending();
                                            setSortNo("descending");
                                            // console.log(sortNo);
                                        }}
                                    >
                                        <a>Price (descending)</a>
                                    </li>
                                    <li
                                        className="list-group-item"
                                        onClick={() => {
                                            console.log(`Sort clicked descending`);
                                            sortRandom();
                                            setSortNo("random");
                                            // console.log(sortNo);
                                        }}
                                    >
                                        <a>Relevance</a>
                                    </li>
                                </ul>
                            </div>
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
            <br />
            <br />
        </div>
    );
};

export default App;
