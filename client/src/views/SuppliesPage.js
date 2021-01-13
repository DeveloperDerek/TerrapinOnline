import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const SuppliesPage = () => {
    const [supplies, setSupplies] = useState(null);

    useEffect(() => {
        axios
        .get("http://localhost:8000/api/category/view-products")
        .then((res) => {
            console.log(res.data);
            setSupplies(res.data);
        })
        .catch(err => console.log(err));
    }, [])

    if (supplies === null) {
        return(<div>Loading...</div>)
    }

    return(
        <div>
            <Navbar />
                <div className="container-fluid">
                    
                </div>
            <Footer />
        </div>
    )
}

export default SuppliesPage;