import React from "react";

const Location = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a>Home</a>
                            </li>
                            <li className="breadcrumb-item active">
                                <a>Categories</a>
                            </li>
                            {/* <li className="breadcrumb-item active" aria-current="page">
                                Sub-category
                            </li> */}
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Location;
