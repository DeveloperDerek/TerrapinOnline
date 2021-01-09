import React, { useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const Register = () => {
    const [errors, setErrors] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState(null);
    const [birthday, setBirthday] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, gender, birthday, password, confirmPassword, email}
        axios
            .post("http://localhost:8000/api/user/register", newUser, { withCredentials: true })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err.response.data);
                setErrors(err.response.data.errors);
            });
    }

    return (
            <div>
                <div className="container center-screen">
                    <div className="row">
                        <div className="">
                            <div className="text-center m-3">
                                <h1>Signup</h1>
                            </div>
                            <form onSubmit={createUser}>
                                <div className="row">
                                    <div className="col-1">
                                        <label><i className="far fa-envelope fa-2x my-auto"></i></label>
                                    </div>
                                    <div className="col">
                                        <input 
                                            type="email" 
                                            className="form-control col" 
                                            placeholder="Enter email"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value)
                                            }}
                                            />
                                        {errors?.email && (
                                            <span className="text-danger">
                                                {errors.email?.message}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-1">
                                        <label><i className="fas fa-address-book fa-2x"></i></label>
                                    </div>
                                    <div className="col">
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            placeholder="Enter first name"
                                            value={firstName}
                                            onChange={(e) => {
                                                setFirstName(e.target.value)
                                            }}
                                        />
                                        {errors?.firstName && (
                                        <span className="text-danger">
                                            {errors.firstName?.message}
                                        </span>
                                        )}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-1">
                                        <label><i className="far fa-address-book fa-2x"></i></label>
                                    </div>
                                    <div className="col">
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            placeholder="Enter last name"
                                            value={lastName}
                                            onChange={(e) => {
                                                setLastName(e.target.value)
                                            }}
                                        />
                                        {errors?.lastName && (
                                            <span className="text-danger">
                                                {errors.lastName?.message}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-1">
                                        <label><i class="fas fa-genderless fa-2x"></i></label>
                                    </div>
                                    <div className="col">
                                        <select value={gender} onChange={(e) => setGender(e.target.value)} className="form-control">
                                            <option disabled selected value> -- select an option -- </option>
                                            <option value="Female">Female</option>
                                            <option value="Male">Male</option>
                                        </select>
                                        {errors?.gender && (
                                            <span className="text-danger">
                                                {errors.gender?.message}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-1">
                                        <label><i class="fas fa-birthday-cake fa-2x"></i></label>
                                    </div>
                                    <div className="col">
                                        <input type="date" className="form-control" value={birthday} onChange={(e) => {
                                            setBirthday(e.target.value)
                                        }}/>
                                        {errors?.birthday && (
                                            <span className=" text-danger">
                                                {errors.birthday?.message}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-1">
                                        <label><i className="far fa-id-badge fa-2x"></i></label>
                                    </div>
                                    <div className="col">
                                        <input 
                                            type="password" 
                                            className="form-control" 
                                            placeholder="Enter password"
                                            value={password}
                                            onChange={(e) => {
                                                setPassword(e.target.value)
                                            }}
                                            />
                                        {errors?.password && (
                                            <span className="text-danger">
                                                {errors.password?.message}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-1">
                                        <label><i className="fas fa-id-badge fa-2x"></i></label>
                                    </div>
                                    <div className="col">
                                        <input 
                                            type="password" 
                                            className="form-control"
                                            placeholder="Confirm password"
                                            value={confirmPassword}
                                            onChange={(e) => {
                                                setConfirmPassword(e.target.value)
                                            }}
                                            />
                                        {errors.confirmPassword && (
                                            <span className="text-danger cap-first-letter">
                                                {errors.confirmPassword?.message}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <button className="btn btn-primary btn-lg btn-ml">Register</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Register