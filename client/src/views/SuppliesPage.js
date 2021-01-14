import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SupplyLink from "../components/SupplyLink";

const CategoryPage = () => {
    return(
        <div className="">
            <Navbar />
                <div className="container-fluid">
                    <div className="row p-3">
                        <SupplyLink />
                        <div className="col"></div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default CategoryPage;