import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../utils/UserContext";
import Navbar from "../components/Navbar";

const Home = () => {
    return(
        <div>
            <Navbar />
        </div>
    )
}

export default Home