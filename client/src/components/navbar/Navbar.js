import React from "react";
import Cart from "../cart/Cart";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/">
                    Simple Ecommerce
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarsExampleDefault"
                    aria-controls="navbarsExampleDefault"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="index.html">
                                Home
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="category.html">
                                Categories <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="product.html">
                                Product
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="cart.html">
                                Cart
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact.html">
                                Contact
                            </a>
                        </li>
                    </ul>

                    <Cart />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
