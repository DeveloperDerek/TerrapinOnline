import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import Navbar from "../../components/Navbar";
import AnimalForm from "../../components/Admin/AnimalForm";

const EditAnimal = (props) => {
    const {id} = props;

    const deleteAnimal = () => {
        axios
        .delete(`http://localhost:8000/api/animal/delete/${id}`)
        .then(navigate("/admin"))
    }

    return(
        <div>
            <Navbar />
            <div className="container-fluid px-5">
                <p className="display-6 text-center py-2">Add Animal</p>
                <div className="px-5 pb-5">
                    <AnimalForm func={`update/${id}`} buttontext="EDIT ANIMAL" id={id} />
                    <div className="">
                        <button className="btn btn-danger float-start" onClick={deleteAnimal}>DELETE ANIMAL</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditAnimal