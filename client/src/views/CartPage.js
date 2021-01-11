import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../utils/UserContext";
import Navbar from "../components/Navbar";

const CartPage = () => {
    const [cart, setCart] = useState(null)

    useEffect(() => {
        axios
        .get("http://localhost:8000/api/cart/view", { withCredentials: true })
        .then((res) => {
            console.log(res.data)
            setCart(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    if (cart === null) {
        return(<div>loading...</div>)
    }

    return(
        <div>
            <Navbar />
            <div className="container">
                {cart.cartItems.map((item, idx) => {
                    return(
                        <div key={idx}>
                            <div>{item.title}</div>
                            <div>{item.product.price}</div>
                            <div>{item.product.description}</div>
                            <div>Quantity : {item.quantity}</div>
                            <div>Total: {item.quantity * item.product.price}</div>
                            <hr />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CartPage