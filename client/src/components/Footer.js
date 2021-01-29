import React, { useState } from "react";
import { Link } from "@reach/router";


const Footer = () => {
    const [email, setEmail] = useState("")

    const formHandler = () => {
        console.log(email)
    }

    return(
        <div className="container-fluid pb-4">
            <hr />
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
                            <Link className="text-decoration-none text-secondary" to="/turtle/600b3fb6394b950b44e29ca1">Turtles</Link>
                        </div>
                        <div>
                            <Link className="text-decoration-none text-secondary" to="/tortoise/600b3fbf394b950b44e29ca2">Tortoise</Link>
                        </div>
                        <div>
                            <Link className="text-decoration-none text-secondary" to="/supplies">Supplies</Link>
                        </div>
                    </div>
                    <div className="col text-secondary">
                        <div className="text-center pb-1">
                            <h5>Newsletter</h5>
                            <div>Sign up for our newsletter</div>
                        </div>
                        <form onSubmit={formHandler}>
                            <div className="input-group input-group-sm">
                                <input type="text" className="form-control" placeholder="Enter your email address" onChange={(e) => setEmail(e.target.value)} />
                                <button className="btn btn-outline-secondary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;