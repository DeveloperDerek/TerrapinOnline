import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { UserContext } from "../utils/UserContext";

const ProfilePage = () => {
    const {loggedUser} = useContext(UserContext);
    const [errors, setErrors] = useState([]);
    const [user, setUser] = useState(null)
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [edit, setEdit] = useState(true);
    const [editPass, setEditPass] = useState(true);

    useEffect(() => {
        axios
        .get("http://localhost:8000/api/user/login_check", { withCredentials: true })
        .then((res) => {
            setUser(res.data);
            setFirstName(res.data.firstName);
            setLastName(res.data.lastName);
            setEmail(res.data.email);
        })
    }, [])

    if (user === null) {
        return(<div>...Loading</div>)
    }

    const cancelEdit = () => {
        setEdit(!edit);
    }
    
    const activateEdit = () => {
        const data = { oldPassword }
        axios
        .post("http://localhost:8000/api/user/passwordcheck", data, { withCredentials: true })
        .then((res) => {
            console.log(res.data);
            setOldPassword("");
            setEdit(false);
        })
        .catch((err) => {
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }

    const activatePass = () => {
        setEditPass(!editPass);
    }
    
    const saveChanges = () => {
        const changes = { firstName, lastName, email, oldPassword }
        axios
        .post("http://localhost:8000/api/user/update", changes, { withCredentials: true })
        .then((res) => {
            console.log(res.data);
            cancelEdit();
            setOldPassword("");
        })
        .catch((err) => {
            console.log(err.response.data)
            setErrors(err.response.data.errors)
        })
    }

    return(
        <div className="fill-vertical">
            <Navbar />
            <div className="container-fluid py-3">
                <h1 className="text-center display-5 pb-3">My Account</h1>
                <hr />
                <div className="mx-auto w-50 text-muted">
                    {editPass
                    ?
                    <div>
                        <div className="row py-2">
                            <label className="form-label">Email</label>
                            {edit ? 
                                <input className="form-control" type="text" placeholder={email} readOnly />
                            :
                                <input className="form-control" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                            }
                        </div>
                        <div className="row py-2">
                            <label className="form-label">First Name</label>
                            {edit ? 
                                <input className="form-control" type="text" placeholder={firstName} readOnly />
                            :
                                <input className="form-control" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            }
                        </div>
                        <div className="row py-2">
                            <label className="form-label">Last Name</label>
                            {edit ? 
                                <input className="form-control" type="text" placeholder={lastName} readOnly />
                            :
                                <input className="form-control" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            }
                        </div>
                        {edit 
                        ? 
                            <div className="row py-2">
                                <label className="form-label"><small>Enter password first to edit info</small></label>
                                <input className="form-control" type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)}/>
                            </div>
                        :
                            ""
                        }
                        <div className="row py-2">
                            <div className="col">
                                {edit
                                ?
                                <button className="btn btn-outline-primary float-start" onClick={activatePass}>Edit Password</button>
                            :
                                <button className="btn btn-outline-secondary float-start" onClick={cancelEdit}>Cancel</button>
                            }
                            </div>
                            <div className="col">
                                {edit
                                ?
                                <button className="btn btn-outline-danger float-end" onClick={activateEdit}>Edit Info</button>
                            :
                                <button className="btn btn-outline-primary float-end" onClick={saveChanges}>Save Changes</button>
                            }
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <div className="row py-2">
                            <label className="form-label">Previous Password</label>
                            <input className="form-control" type="text" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
                        </div>
                        <div className="row py-2">
                            <label className="form-label">New Password</label>
                            <input className="form-control" type="text" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                        </div>
                        <div className="row py-2">
                            <label className="form-label">Confirm Password</label>
                            <input className="form-control" type="text" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                        <div className="row py-2">
                            <div className="col">
                                <button className="btn btn-outline-secondary float-start" onClick={activatePass}>Cancel</button>
                            </div>
                            <div className="col">
                                <button className="btn btn-outline-primary float-end" onClick={saveChanges}>Edit Info</button>
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProfilePage