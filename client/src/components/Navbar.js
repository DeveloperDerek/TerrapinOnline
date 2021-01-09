import React, { useState, useContext } from "react";
import axios from "axios";
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
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">TerrapinOnline</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/product_search">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/product_search">Terrapins</a>
                        </li>
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Share</span>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="/"><i className="fab fa-facebook"></i> Like us on Facebook</a></li>
                            <li><a className="dropdown-item" href="/"><i className="fab fa-instagram"></i> Tag us on Instagram</a></li>
                            <li><a className="dropdown-item" href="/"><i className="fab fa-twitter"></i> Follow us on Twitter</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="/contact"><i className="far fa-envelope"></i> Contact Us</a></li>
                        </ul>
                        </li>
                    </ul>
                </div>
                {loggedUser.check ?
                    <div className="d-flex">
                        <span className="text-danger">{loggedUser.userInfo.firstName}</span>
                        <button className="btn btn-outline-danger" onClick={logout}>Logout</button>
                    </div>
                :
                    <div className="navbar-item">
                        <button className="btn btn-outline-light" onClick={popLogin}>Login</button>
                    </div>
                }
            </div>
            {modal ? <Login toggle={popLogin} /> : ""}
        </nav>
    )
}

export default Navbar;