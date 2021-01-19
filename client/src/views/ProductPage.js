import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../utils/UserContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SupplyLink from "../components/SupplyLink";
import AddedModal from "../components/AddedModal";

const ProductPage = (props) => {
    const {loggedUser} = useContext(UserContext);
    const {id} = props
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [cartModal, setCartModal] = useState(false);

    const toggle = () => {
        setCartModal(!cartModal);
    }

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
        axios
        .post(`http://localhost:8000/api/cart/addToCart/`, data, { withCredentials: true })
        .then((cart) => {
            console.log(cart);
            toggle();
        })
        .catch(err => console.log(err));
    }

    function addZeroes(num) {
        const value = toString(num);
        const dec = value.split('.')[1]
        const len = dec && dec.length > 2 ? dec.length : 2
        return Number(num).toFixed(len)
    }

    return(
        <div className="fill-vertical">
            <Navbar />
            <div className="container-fluid">
                <div className="row p-3">
                    <SupplyLink />
                    <div className="col">
                        <div className="row">
                            <p className="display-5 text-center py-3">{product.title}</p>
                            <div className="col">
                                <img className="img-fluid border rounded mx-auto d-block py-3" src={product.imageKey} />
                            </div>
                            <div className="col">
                                <p className="py-2">{product.description}</p>
                                <p>${addZeroes(product.price)}</p>

                                <div class="form-floating mb-3 w-25">
                                    <input className="form-control" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} min="1" />
                                    <label className="form-label">Quantity</label>
                                </div>
                                {loggedUser.check ? 
                                    // <button className="btn btn-outline-primary" onClick={() => addToCart(product._id, product.price,quantity)}>Add to Cart</button>
                                    <button class="btn btn-primary" data-bs-toggle="modal" onClick={() => addToCart(product._id, product.price,quantity)}>Add to Cart</button>
                                :
                                    <button className="btn btn-outline-primary" disabled>Log in to add to cart</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            {cartModal ? <AddedModal product={product} toggle={toggle}/>:  ""}
        </div>
    )
}

export default ProductPage

{/* <div className="col px-5 pb-3">
<h1 className="display-5 text-center">{product.title}</h1>
<img className="img-fluid border rounded mx-auto d-block py-3" src={product.imageKey} />
<p className="py-2">{product.description}</p>
<p>${addZeroes(product.price)}</p>

<div class="form-floating mb-3 w-25">
    <input className="form-control" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} min="1" />
    <label className="form-label">Quantity</label>
</div>
{loggedUser.check ? 
    // <button className="btn btn-outline-primary" onClick={() => addToCart(product._id, product.price,quantity)}>Add to Cart</button>
    <button class="btn btn-primary" data-bs-toggle="modal" onClick={() => addToCart(product._id, product.price,quantity)}>Add to Cart</button>
:
    <button className="btn btn-outline-primary" disabled>Log in to add to cart</button>
}
</div> */}