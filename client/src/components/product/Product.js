import React from "react";

const Product = (props) => {
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
                <img
                    height="200"
                    width="600"
                    className="card-img-top"
                    src={props.imageSrc}
                    alt={props.productTitle}
                />
                <div className="card-body">
                    <h4 className="card-title">
                        <a title="View Product">{props.productTitle}</a>
                    </h4>
                    <p className="card-text">{props.description}</p>
                    <div className="row">
                        <div className="col">
                            <p className="btn btn-danger btn-block"> {props.pricingText} </p>
                        </div>
                        <div className="col">
                            <a className="btn btn-success btn-block">Add to cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
