import React, { useState, useContext } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import { UserContext } from "../utils/UserContext";
import Login from "./Login";

const Navbar = () => {
    const {loggedUser} = useContext(UserContext);
    const [modal, setModal] = useState(false);

    const popLogin = () => {
        setModal(!modal);
    }

    const logout = () => {
        axios
            .post("http://localhost:8000/api/user/logout", {}, { withCredentials: true })
            .then((res) => {
                console.log(res);
                window.location.reload(false); //to refresh the page
            })
            .catch(console.log);
    }

    return(
        <div>
            {/* Homepage & Login/Reg */}
            <nav className="navbar navbar-light bg-success bg-gradient py-md-1">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="https://www.seekpng.com/png/full/51-510863_cartoon-tortoise-shell-image-turtle.png" alt="" width="30" height="24" />Turts&Torts
                    </a>
                    {loggedUser.check ?
                        <div className="d-flex">
                            <Link className="btn btn-sm btn-outline-dark" to="/profile">Profile</Link>
                            <button className="btn btn-sm btn-outline-dark" onClick={logout}>Logout</button>
                            <button className="btn btn-sm btn-outline-dark">
                                <i className="las la-shopping-cart"></i>
                            </button>
                        </div>
                    :
                    <div className="navbar-item">
                        <button className="btn btn-sm btn-outline-dark" onClick={popLogin}>Sign in or Create Account</button>
                        </div>
                    }
                </div>
                {modal ? <Login toggle={popLogin} /> : ""}
            </nav>

            {/* Page Linker */}
            <div className="d-flex justify-content-around bg-light p-1">
                <Link className="btn btn-sm text-success" to="/careguide">Care Guide</Link>
                <span>|</span>
                <Link className="btn btn-sm text-success" to="/">Turtles for Sale</Link>
                <span>|</span>
                <Link className="btn btn-sm text-success" to="/">Tortoise for Sale</Link>
                <span>|</span>
                <Link className="btn btn-sm text-success" to="/">Supplies for Sale</Link>
            </div>
        </div>
    )
}

export default Navbar;