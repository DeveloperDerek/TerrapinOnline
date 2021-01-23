import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import { UserContext } from "../utils/UserContext";
import Login from "./Login";

const Navbar = () => {
    const {loggedUser} = useContext(UserContext);
    const [modal, setModal] = useState(false);
    const [cart, setCart] = useState(null);
    const [length, setLength] = useState("");

    useEffect(() => {
        axios
        .get("http://localhost:8000/api/cart/view", { withCredentials: true })
        .then((res) => {
            setCart(res.data)
            setLength(res.data.cartItems.length)
            console.log(res.data)
        })
    }, [])


    const popLogin = () => {
        setModal(!modal);
    }

    const logout = () => {
        axios
            .post("http://localhost:8000/api/user/logout", {}, { withCredentials: true })
            .then((res) => {
                console.log(res);
                navigate("/")
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
                            <Link to="/cart" className="btn btn-sm btn-outline-dark">
                                <span>
                                    ({length}<i className="f900 las la-shopping-cart"></i>)
                                </span>
                            </Link>
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
                <Link className="btn btn-sm text-success" to="/care-guide">Care Guide</Link>
                <span>|</span>
                <Link className="btn btn-sm text-success" to="/turtle/600b3fb6394b950b44e29ca1">Turtles for Sale</Link>
                <span>|</span>
                <Link className="btn btn-sm text-success" to="/tortoise/600b3fbf394b950b44e29ca2">Tortoise for Sale</Link>
                <span>|</span>
                <Link className="btn btn-sm text-success" to="/supplies">Supplies for Sale</Link>
            </div>
        </div>
    )
}

export default Navbar;