import React from "react";

const Footer = () => {
    return (
        <footer className="text-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-lg-4 col-xl-3">
                        <h5>About</h5>
                        <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
                        <p className="mb-0">
                            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise
                            en page avant impression.
                        </p>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                        <h5>Informations</h5>
                        <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
                        <ul className="list-unstyled">
                            <li>
                                <a href="">Link 1</a>
                            </li>
                            <li>
                                <a href="">Link 2</a>
                            </li>
                            <li>
                                <a href="">Link 3</a>
                            </li>
                            <li>
                                <a href="">Link 4</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto">
                        <h5>Others links</h5>
                        <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
                        <ul className="list-unstyled">
                            <li>
                                <a href="">Link 1</a>
                            </li>
                            <li>
                                <a href="">Link 2</a>
                            </li>
                            <li>
                                <a href="">Link 3</a>
                            </li>
                            <li>
                                <a href="">Link 4</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3">
                        <h5>Contact</h5>
                        <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
                        <ul className="list-unstyled">
                            <li>
                                <i className="fa fa-home mr-2"></i> My company
                            </li>
                            <li>
                                <i className="fa fa-envelope mr-2"></i> email@example.com
                            </li>
                            <li>
                                <i className="fa fa-phone mr-2"></i> + 33 12 14 15 16
                            </li>
                            <li>
                                <i className="fa fa-print mr-2"></i> + 33 12 14 15 16
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 copyright mt-3">
                        <p className="float-left">
                            <a href="#">Back to top</a>
                        </p>
                        <p className="text-right text-muted">
                            created with <i className="fa fa-heart"></i> by{" "}
                            <a href="https://t-php.fr/43-theme-ecommerce-bootstrap-4.html">
                                <i>t-php</i>
                            </a>{" "}
                            | <span>v. 1.0</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
