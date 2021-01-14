import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../utils/UserContext";
import Navbar from "../components/Navbar";

const CartPage = () => {
    const [cart, setCart] = useState(null)

    const getCart = async () => {
        await axios
        .get("http://localhost:8000/api/cart/view", { withCredentials: true })
        .then((res) => {
            setCart(res.data)
        })
    }

    useEffect(() => {
        getCart();
    }, [])

    if (cart === null) {
        axios.post("http://localhost:8000/api/cart/create", { withCredentials: true })
            .then((res) => setCart(res.data))
    }



    return(
        <div>
            <Navbar />
            <div className="container">
                {/* {cart.cartItems.map((item, idx) => {
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
                })} */}
            </div>
        </div>
    )
}

export default CartPage