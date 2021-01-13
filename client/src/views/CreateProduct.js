import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../utils/UserContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CreateProduct = () => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [imageKey, setImageKey] = useState("");

    const formHandler = (e) => {
        e.preventDefault();
        const data = {title, category, description, price, imageKey}
        axios
        .post("http://localhost:8000/api/product/create", data)
        .then((res) => {
            console.log(res.data)
            setTitle("");
            // setCategory("");
            setDescription("");
            setPrice("");
            setImageKey("");

        })
        .catch((err) => console.log(err))
    }

    return(
        <div>
            <Navbar />
                <div>
                    <form onSubmit={formHandler}>
                        <div className="row">
                            <label>Title</label>
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="row">
                            <label>Category</label>
                            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
                        </div>
                        <div className="row">
                            <label>Description</label>
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows="5" />
                        </div>
                        <div className="row">
                            <label>Price</label>
                            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div className="row">
                        <label>ImageKey</label>
                        <input type="text" value={imageKey} onChange={(e) => setImageKey(e.target.value)} />
                        </div>
                        <button>Send</button>
                    </form>
                </div>
            <Footer />
        </div>
    )
}

export default CreateProduct