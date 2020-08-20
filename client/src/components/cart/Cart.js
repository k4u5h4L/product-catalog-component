import React from "react";

const Cart = () => {
    return (
        <div>
            <form class="form-inline my-2 my-lg-0">
                <div class="input-group input-group-sm">
                    <input
                        type="text"
                        class="form-control"
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="Search..."
                    />
                    <div class="input-group-append">
                        <button type="button" class="btn btn-secondary btn-number">
                            <i class="fa fa-search"></i>
                        </button>
                    </div>
                </div>
                <a class="btn btn-success btn-sm ml-3" href="cart.html">
                    <i class="fa fa-shopping-cart"></i> Cart
                    <span class="badge badge-light">0</span>
                </a>
            </form>
        </div>
    );
};

export default Cart;
