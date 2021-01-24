import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import { navigate } from "@reach/router";

const EditProduct = (props) => {
    const {id} = props;
    const [product, setProduct] = useState(null)
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [imageKey, setImageKey] = useState("");
    const [stock, setStock] = useState("");
    const [categories, setCategories] = useState(null);
    const [category, setCategory] = useState("");

    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/product/view/${id}`)
        .then((res) => {
            setProduct(res.data);
            setTitle(res.data.title);
            setDescription(res.data.description);
            setPrice(res.data.price);
            setImageKey(res.data.imageKey);
            setStock(res.data.stock);
        })
    }, [])

    if(product === null) {
        return(<div>Loading...</div>)
    }

    const formHandler = (e) => {
        e.preventDefault();
        const data = {title, description, price, imageKey, stock}
        axios
        .put(`http://localhost:8000/api/product/update/${id}`, data)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err.response))
    }

    const deleteProduct = () => {
        axios
        .delete(`http://localhost:8000/api/product/delete${id}`)
        .then(() => navigate("/"))
    }

    return(
        <div>
            <Navbar />
            <div className="container-fluid px-5 pb-5">
                <p className="display-6 text-center py-2">{product.title}</p>
                <div className="pb-3">
                    <img className="img-fluid border rounded mx-auto d-block" src={product.imageKey} />
                </div>
                <form onSubmit={formHandler}>
                    <div className="px-5">
                        <div className="form-floating mb-3">
                            <input className="form-control" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                            <label>Title</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" value={imageKey} onChange={(e) => setImageKey(e.target.value)} />
                            <label>Image Url</label>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <input type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
                                    <label>Price</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <input type="number" className="form-control" value={stock} onChange={(e) => setStock(e.target.value)} />
                                    <label>Stock</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-floating">
                            <textarea className="form-control" style={{height: "100px"}} value={description} onChange={(e) => setDescription(e.target.value)} /> 
                            <label>Description</label>
                        </div>
                        <div className="py-2">
                            <span className="btn btn-danger float-start" onClick={deleteProduct}>DELETE PRODUCT</span>
                            <button className="btn btn-dark float-end">EDIT PRODUCT</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditProduct

