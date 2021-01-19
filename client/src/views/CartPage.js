import React, { useState, useContext, useEffect, createContext } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CartPage = () => {
    const [cart, setCart] = useState(null)
    const [cartItems, setCartItems] = useState("");
    const [tax, setTax] = useState("");
    const [total, setTotal] = useState("");
    const [shipping, setShipping] = useState({
        address : "",
        city: "",
        postalCode: ""
    });
    const [errors, setErrors] = useState({});
    const [click, setClick] = useState(false);

    const addcartItems = (c) => {
        let sum = 0;
        c.map((item) => {
            sum = sum + item.price
        })
        let tax = sum * 0.08
        setCartItems(sum);
        setTax(tax);
        setTotal(sum + tax)
    }

    useEffect(() => {
        axios
        .get("http://localhost:8000/api/cart/view", { withCredentials: true })
        .then((res) => {
            setCart(res.data)
            console.log(res.data)
            addcartItems(res.data.cartItems)
        })
    }, [click])

    if(cart === null) {
        return(<div>loading...</div>)
    }

    const removeItem = (id) => {
        const data = {cartItem: id};
        axios
        .post("http://localhost:8000/api/cart/removeFromCart", data, { withCredentials: true })
        .then((res) => {
            console.log(res.data)
            setClick(!click);
        })
    }

    const addZeroes = (num) => {
        const value = toString(num);
        const dec = value.split('.')[1]
        const len = dec && dec.length > 2 ? dec.length : 2
        return Number(num).toFixed(len)
    }

    const createOrder = () => {
        const data = {cart: cart._id, shippingAddress: shipping, taxPrice: tax, totalPrice: total,}
        axios
        .post("http://localhost:8000/api/order/createOrder", data, { withCredentials: true })
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err);
            setErrors(err.response.data.errors)
        })
    }

    return(
        <div>
            <Navbar />
            <div className="container-fluid">
                <h1 className="display-6 text-center p-3">Secure Checkout</h1>
                <hr />
                <div className="pt-1">
                {cart.cartItems.length 
                ? 
                <div>
                    {cart.cartItems.map((item, idx) => {
                        return(
                            <div className="row border py-3" key={idx}>
                                <div className="col-5">
                                    <img className="img-fluid p-3 border mx-auto d-block" src={`${item.product.imageKey}`} />
                                </div>
                                <div className="col">
                                    <p className="lead">{item.product.title}</p>
                                    {/* <p>{item.product.description}</p> */}
                                    <p>Quantity : {item.quantity}</p>
                                    <p>Total: ${addZeroes(item.quantity * item.product.price)}</p>
                                    <div className="pt-3">
                                        <button className="btn btn-outline-danger" onClick={() => removeItem(item._id)}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                :
                <div className="row">
                    <p className="text-center p-5 border">No items in shopping cart</p>
                </div>
                }
                </div>
                <div className="border row py-3 px-5">
                    <div className="col">
                        <p className="text-muted">** Shipping only available in US **</p>
                        <div class="form-floating">
                            <input type="text" class="form-control" value={shipping.address} onChange={(e) => setShipping({...shipping, address:e.target.value})}/>
                            <label>Address</label>
                        </div>
                        <div class="form-floating">
                            <input type="text" class="form-control" value={shipping.city} onChange={(e) => setShipping({...shipping, city:e.target.value})}/>
                            <label>City</label>
                        </div>
                        <div class="form-floating">
                            <input type="number" class="form-control" value={shipping.postalCode} onChange={(e) => setShipping({...shipping, postalCode:e.target.value})}/>
                            <label>Zipcode</label>
                        </div>
                    </div>
                    <div className="col"></div>
                    <div className="col-auto">
                        <p>Shopping Cart Items : ({cart.cartItems.length})</p>
                        <p>Items Cost : ${addZeroes(cartItems)} </p>
                        <p>Tax : ${addZeroes(tax)}</p>
                        <p>Shipping : FREE</p>
                        <p>Total Cost : ${addZeroes(total)}</p>
                        <button className="btn btn-outline-dark" onClick={createOrder}>Checkout</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CartPage