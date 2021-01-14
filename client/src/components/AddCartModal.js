import React, { useState, useEffect } from "react";
import axios from "axios";

const AddCartModal = (props) => {
    const { toggle, product } = props;
    const [qty, setQty] = useState(1);
    const [price, setPrice] = useState(product.price);

    function addZeroes(num) {
        const value = toString(num);
        const dec = value.split('.')[1]
        const len = dec && dec.length > 2 ? dec.length : 2
        return Number(num).toFixed(len)
    }

    useEffect(() => {
        setPrice(qty * product.price)
    }, [qty])

    const addToCart = () => {
        const data = {product_id:product._id, price:product.price, quantity:qty}
        console.log(data);
        axios
        .post(`http://localhost:8000/api/cart/addToCart/`, data, { withCredentials: true })
        .then((cart) => console.log(cart))
        .catch(err => console.log(err));
    }

    return(
        <div className="container-fluid popup">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{product.title}</h5>
                        <button type="button" onClick={() => toggle()}>&times;</button>
                    </div>
                    <div className="modal-body">
                        <div className="row p-2">
                            <label className="col-5 col-form-label">Quantity:</label>
                            <input className="col form-control" type="number" value={qty} onChange={(e) => setQty(e.target.value)} min="1" max={`${product.stock}`} />
                        </div>
                        <div className="row p-2">
                            <p className="col-5">${addZeroes(price)}</p>
                            <button className="col btn btn-primary" type="button" onClick={addToCart}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCartModal