import React from "react";

const Cart = (props) => {
  return (
    <li className="clearfix" key={props.key}>
      <img src={props.imageSrc} alt={props.title} width="70" height="70" />
      <span className="item-name">{props.title}</span>
      <span className="item-price">$ {props.price}</span>
      <span className="item-quantity">Quantity: 01</span>
      <hr />
    </li>
  );
};

export default Cart;
