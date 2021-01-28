import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import { addZeroes } from "../../utils/AddZeroes";
import Navbar from "../../components/Navbar";
import moment from "moment" //moment(insert date here).format("MMM Do YY");

const ViewOrders = () => {
    const [orders, setOrders] = useState(null);
    const [search, setSearch] = useState({
        email: "",
        status: "",
        min: "",
        max: "",
        start: "",
        end: ""
    })

    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/order/all`)
        .then((res) => {
            console.log(res.data)
            if (search.email) {
                setOrders(res.data.filter(o => o.user.email === search.email))
            } else {
                setOrders(res.data)
            }
        })
    }, [search])

    if(orders === null) {
        return(<div>Loading...</div>)
    }

    return(
        <div>
            <Navbar />
            <div className="container-fluid pb-5">
                <div className="px-5">
                    <p className="display-6 text-center py-2 text-success">View Orders</p>
                    <div className="px-5">
                        <div className="row">
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" value={search.email} onChange={(e) => setSearch({...search, email: e.target.value})}/>
                                    <label>Email</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <select className="form-control" value={search.status} onChange={(e) => setSearch({...search, status: e.target.value})} >
                                        <option value="">All</option>
                                        <option value="1">Processing</option>
                                        <option value="2">Shipping</option>
                                        <option value="3">Shipped</option>
                                    </select>
                                    <label>Status</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <input type="number" className="form-control" value={search.min} onChange={(e) => setSearch({...search, min: e.target.value})} />
                                    <label>Min Total Price</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <input type="number" className="form-control" value={search.max} onChange={(e) => setSearch({...search, max: e.target.value})}/>
                                    <label>Max Total Price</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <input type="date" className="form-control" value={search.start} onChange={(e) => setSearch({...search, start: e.target.value})} />
                                    <label>Starting Date</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <input type="date" className="form-control" value={search.end} onChange={(e) => setSearch({...search, end: e.target.value})} />
                                    <label>Ending Date</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-5">
                        {orders.map((order, idx) => {
                            return(
                                <div className="row border py-3 mb-2" key={idx}>
                                    <div className="col-7 mx-5">
                                        <p className="lead"><a href={`/admin/edit-order/${order._id}`}>Order ID : {order._id}</a></p>
                                        <h6>Status : 
                                            {
                                                order.status === 1 ? "Processing" :
                                                order.status === 2 ? "Shipping" :
                                                order.status === 3 ? "Shipped" :
                                                ""
                                            }
                                        </h6>
                                        {order.couponcode ? 
                                            <h6><small className="text-success">Coupon : {order.couponcode}</small></h6>
                                        :
                                            ""
                                        }
                                        <h6>Total Price : ${addZeroes(order.totalPrice)}</h6>
                                        <h6>Total Items : {order.cart.cartItems.length}</h6>
                                    </div>
                                    <div className="col mx-5">
                                        <p className="lead">Customer Info</p>
                                        <h6>Email : {order.user.email}</h6>
                                        <h6>Name : {order.user.firstName} {order.user.lastName}</h6>
                                        <h6>Purchased : {moment(order.createdAt).format("MMMM Do, YYYY")}</h6>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewOrders