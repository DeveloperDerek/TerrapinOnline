import React from "react";
import { Link } from "@reach/router";

const Footer = () => {
    return(
        <div className="bg-light container-fluid py-4">
            <div className="row">
                <div className="d-flex justify-content-around">
                    <div className="col text-center text-secondary">
                        <h5>Contact Us</h5>
                        <div>1725 Slough Avenue</div>
                        <div>Scranton, PA. 18505</div>
                        <div>#1-800-313-9286</div>
                    </div>
                    <div className="col text-center text-secondary">
                        <h5>Information</h5>
                        <div>
                            <Link className="text-decoration-none text-secondary" to="/">Shipping & Returns</Link>
                        </div>
                        <div>
                            <Link className="text-decoration-none text-secondary" text-secondary to="/">Terms and Conditions</Link>
                        </div>
                        <div>
                            <Link className="text-decoration-none text-secondary" to="/">Privacy Notice</Link>
                        </div>
                    </div>
                    <div className="col text-center text-secondary">
                        <h5>Categories</h5>
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
                        <div class="input-group input-group-sm">
                            <input type="text" class="form-control" placeholder="Enter your email address" />
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;