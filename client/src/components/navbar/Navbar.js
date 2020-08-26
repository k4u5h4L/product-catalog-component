import React, { useEffect } from "react";
import Cart from "../cart/Cart";
import $ from "jquery";

import "./navbar.css";

const Navbar = (props) => {
  console.log(props);

  useEffect(() => {
    const hideCart = () => {
      $("#cart").on("click", function () {
        $(".shopping-cart").fadeToggle("fast");
      });
    };

    hideCart();
  }, []);

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

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarsExampleDefault"
        >
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <a className="nav-link">Home</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link">
                Categories <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Product</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Cart</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Contact</a>
            </li>
          </ul>

          {/* <Cart cartNumberTotal={props.cartNumber} /> */}
        </div>
      </div>
      <div className="container">
        <ul className="navbar-right">
          <li>
            <a href="#" id="cart">
              <i className="fa fa-shopping-cart"></i> Cart{" "}
              <span className="badge">{props.cartNumber}</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="shopping-cart">
          <div className="shopping-cart-header">
            <i className="fa fa-shopping-cart cart-icon"></i>
            <span className="badge">{props.cartNumber}</span>
            <div className="shopping-cart-total">
              <span className="lighter-text">Total:</span>
              <span className="main-color-text">
                ${" "}
                {props.cartItems.reduce((a, b) => {
                  console.log(`a:`);
                  console.log(a);
                  return a.rating + b.rating;
                }, 0)}
              </span>
            </div>
          </div>

          <ul className="shopping-cart-items">
            {props.cartItems.map((item, index) => (
              <li className="clearfix" key={index}>
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  width="70"
                  height="70"
                />
                <span className="item-name">{item.title}</span>
                <span className="item-price">$ {item.price}</span>
                <span className="item-quantity">Quantity: 01</span>
                <hr />
              </li>
            ))}

            {/* <li className="clearfix">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item2.jpg"
                alt="item1"
              />
              <span className="item-name">KS Automatic Mechanic...</span>
              <span className="item-price">$1,249.99</span>
              <span className="item-quantity">Quantity: 01</span>
            </li>

            <li className="clearfix">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item3.jpg"
                alt="item1"
              />
              <span className="item-name">Kindle, 6" Glare-Free To...</span>
              <span className="item-price">$129.99</span>
              <span className="item-quantity">Quantity: 01</span>
            </li> */}
          </ul>

          <a className="button">Checkout</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
