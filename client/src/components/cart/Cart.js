import React from "react";

const Cart = (props) => {
  return (
    <div>
      <form className="form-inline my-2 my-lg-0">
        {/* <div className="input-group input-group-sm">
                    <input
                        type="text"
                        className="form-control"
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="Search..."
                    />
                    <div className="input-group-append">
                        <button type="button" className="btn btn-secondary btn-number">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div> */}
        <a className="btn btn-success btn-sm ml-3" href="#" id="cart">
          <i className="fa fa-shopping-cart"></i> Cart <span> </span>
          <span className="badge badge-light">{props.cartNumberTotal}</span>
        </a>
      </form>
    </div>
  );
};

export default Cart;
