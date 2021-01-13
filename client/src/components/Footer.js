import React from "react";
import { Link } from "@reach/router";

const Footer = () => {
    return(
        <div className="bg-light container-fluid py-4">
            <div className="row">
                <div className="d-flex justify-content-around">
                    <div className="col text-center text-secondary">
                        <h5>Contact Us</h5>
                        <div>
                            <Link className="text-decoration-none text-secondary" to="/contact-us">Email Us</Link>
                        </div>
                        <div>1725 Slough Avenue</div>
                        <div>Scranton, PA. 18505</div>
                        <div>#1-800-313-9286</div>
                    </div>
                    <div className="col text-center text-secondary">
                        <h5>Information</h5>
                        <div>
                            <Link className="text-decoration-none text-secondary" to="/terms-and-condition">Terms & Conditions</Link>
                        </div>
                        <div>
                            <Link className="text-decoration-none text-secondary" to="/shipping-and-return">Shipping & Returns</Link>
                        </div>
                        <div>
                            <Link className="text-decoration-none text-secondary" to="/privacy-notice">Privacy Notice</Link>
                        </div>
                    </div>
                    <div className="col text-center text-secondary">
                        <h5>Categories</h5>
                        <div>
                            <Link className="text-decoration-none text-secondary" to="/care-guide">Care Guide</Link>
                        </div>
                        <div>
                            <Link className="text-decoration-none text-secondary" to="/">Turtles</Link>
                        </div>
                        <div>
                            <Link className="text-decoration-none text-secondary" to="/">Tortoise</Link>
                        </div>
                        <div>
                            <Link className="text-decoration-none text-secondary" to="/">Supplies</Link>
                        </div>
                    </div>
                    <div className="col text-secondary">
                        <div className="text-center pb-1">
                            <h5>Newsletter</h5>
                            <div>Sign up for our newsletter</div>
                        </div>
                        <div className="input-group input-group-sm">
                            <input type="text" className="form-control" placeholder="Enter your email address" />
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;