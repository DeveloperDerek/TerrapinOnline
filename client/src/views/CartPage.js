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
            setCart(res.data)
            console.log(res.data)
        })
    }, [])

    if(cart === null) {
        return(<div>loading...</div>)
    }

    return(
        <div>
            <Navbar />
            <div className="container">
                <h1>Cart items</h1>
                {cart.cartItems.map((item, idx) => {
                    return(
                        <div key={idx}>
                            <img src={`${item.product.imageKey}`} />
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