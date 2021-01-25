import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import { navigate, Link } from "@reach/router";

const AdminPage = () => {

    return(
        <div>
            <Navbar />
            <div className="container-fluid">
                <p className="display-6 text-center py-2">Admin Access</p>
                <hr />

                <div>
                    <Link to="/admin/create-product">Add Product</Link>
                </div>
                <div>
                    <Link to="/admin/view-products">View Products</Link>
                </div>

                <div>
                    <Link to="/admin/create-category">Add Category</Link>
                </div>
                <div>
                    <Link to="/admin/view-categories">View Categories</Link>
                </div>

                <div>
                    <Link to="/admin/create-animal">Add Animal</Link>
                </div>
                <div>
                    <Link to="/">View Animals</Link>
                </div>

                <div>
                    <Link to="/">View Orders</Link>
                </div>

                <div>
                    <Link to="/">View Messages</Link>
                </div>
            </div>
        </div>
    )
}

export default AdminPage

