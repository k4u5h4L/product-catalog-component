import React from "react";

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

                    {/* <form className="form-inline my-2 my-lg-0">
                <div className="input-group input-group-sm">
                    <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Search...">
                    <div className="input-group-append">
                        <button type="button" className="btn btn-secondary btn-number">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
                <a className="btn btn-success btn-sm ml-3" href="cart.html">
                    <i className="fa fa-shopping-cart"></i> Cart
                    <span className="badge badge-light">3</span>
                </a>
            </form> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
