import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import moment from "moment" //moment(insert date here).format("MMM Do YY");

const Orders = () => {
    const [orders, setOrders] = useState(null);

    function addZeroes(num) {
        const value = toString(num);
        const dec = value.split('.')[1]
        const len = dec && dec.length > 2 ? dec.length : 2
        return Number(num).toFixed(len)
    }

    useEffect(() => {
        axios
        .get("http://localhost:8000/api/order/getorder", { withCredentials: true })
        .then((res) => {
            console.log(res.data)
            setOrders(res.data)
        })
    }, [])

    if(orders === null) {
        return(<div>Loading....</div>)
    }

    return(
        <div>
            {orders.length ? 
                <div className="text-muted mx-auto w-50">
                    {orders.map((order, idx) => {
                        return(
                            <div className="row" key={idx}>
                                <p>Order # : <Link to={`/order/${order.cart._id}`}>{order._id}</Link></p>
                                <p>Purchase Date : {moment(order.createdAt).format("MMMM Do, YYYY")}</p>
                                <p>Shipped to : {order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.postalCode}</p>
                                <p>Shipping : ${addZeroes(order.shippingPrice)}</p>
                                <p>Items({order.cart.cartItems.length}) : ${addZeroes(order.totalPrice - order.taxPrice)}</p>
                                <p>Tax : ${addZeroes(order.taxPrice)}</p>
                                <p>Total Price : ${addZeroes(order.totalPrice)}</p>
                                <p>Status : {order.status === 1 ? "Processing" : order.status === 2 ? "Shipping" : "Shipped"}</p>
                                <hr />
                            </div>
                        )
                    })}
                </div>
            :
                <div className="text-muted mx-auto text-center p-5">
                    <p className="p-5">No orders found</p>
                </div>
            }
        </div>
    )
}

export default Orders