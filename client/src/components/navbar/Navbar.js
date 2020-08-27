import React, { useEffect, useState } from "react";
import Cart from "../cart/Cart";
import Fade from "@material-ui/core/Fade";
import Slide from "@material-ui/core/Slide";

import "./navbar.css";

const Navbar = (props) => {
  const [clickCart, setClickCart] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);

  // console.log(props);

  useEffect(() => {
    const updateTotal = () => {
      let sum = 0;

      for (let i = 0; i < props.cartItems.length; i++) {
        sum += props.cartItems[i].price;
      }

      setCartTotal(sum);
    };

    updateTotal();
  }, [props]);

  const changeCartClickHandler = () => {
    setClickCart(!clickCart);
  };

  return (
    <div>
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
            <div className="container">
              <ul className="navbar-right">
                <li>
                  <a
                    href="#"
                    id="cart"
                    onClick={() => changeCartClickHandler()}
                  >
                    <i className="fa fa-shopping-cart"></i> Cart{" "}
                    <span className="badge">{props.cartNumber}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* ------------------------------------------------------- */}
      {clickCart ? (
        <Fade in={true}>
          <div className="container">
            <div className="shopping-cart">
              <div className="shopping-cart-header">
                <i className="fa fa-shopping-cart cart-icon"></i>
                <span className="badge">{props.cartNumber}</span>
                <div className="shopping-cart-total">
                  <span className="lighter-text">Total:</span>
                  <span className="main-color-text">$ {cartTotal}</span>
                </div>
              </div>

              <ul className="shopping-cart-items">
                {props.cartItems.map((item, index) => (
                  <Slide direction="up" in={true} mountOnEnter unmountOnExit>
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
                    {/* <Cart
                      imageSrc={item.imageSrc}
                      title={item.title}
                      price={item.price}
                      key={index}
                    /> */}
                  </Slide>
                ))}
              </ul>

              <a
                href="#"
                className="button"
                onClick={() => alert("Checked Out!")}
              >
                Checkout
              </a>
            </div>
          </div>
        </Fade>
      ) : null}
      {/* ------------------------------------------------------- */}
    </div>
  );
};

export default Navbar;
