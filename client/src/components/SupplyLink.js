import React, { useState, useEffect } from "react";
import axios from "axios";

const SupplyLink = () => {
    const [supplies, setSupplies] = useState(null);

    useEffect(() => {
        axios
        .get("http://localhost:8000/api/category/getall")
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
        <div className="col-2">
            <div className="sticky-top">
                <h3 className="text-center">Categories</h3>
                <ul className="list-group list-group-flush">
                    {supplies.map((supply, idx) => {
                        if(supply.name !== "Turtle" && supply.name !== "Tortoise") {
                            return(
                                <li className="list-group-item" key={idx}>
                                    <a className="text-decoration-none" href={`/category/${supply.name}/${supply._id}`}>{supply.name}</a>
                                </li>
                            )
                        }
                    })}
                </ul>
            </div>
        </div>
    )
}

export default SupplyLink;