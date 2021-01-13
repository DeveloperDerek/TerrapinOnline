import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../utils/UserContext";
import Navbar from "../components/Navbar";

const ProductPage = (props) => {
    const {id} = props
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState("");

    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/product/view/${id}`)
        .then((res) => {
            console.log(res.data);
            setProduct(res.data);
        })
        .catch(err => console.log(err))
    }, [])

    if (product === null) {
        return(<div>loading...</div>)
    }

    const addToCart = (product_id, price, quantity) => {
        const data = {product_id, price, quantity}
        console.log(data);
        axios
        .post(`http://localhost:8000/api/cart/addToCart/`, data, { withCredentials: true })
        .then((cart) => console.log(cart))
        .catch(err => console.log(err));
    }

    return(
        <div>
            <Navbar />
            <div className="container">
                <div>{product.title}</div>
                <img src={`${product.imageKey}`} />
                <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                <button onClick={() => addToCart(product._id, product.price, quantity)}>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductPage