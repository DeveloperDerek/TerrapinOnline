import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import axios from "axios";
import { UserContext } from "./utils/UserContext";

import Home from "./views/Home";

function App() {
  const [loggedUser, setLoggedUser] = useState({
    check:false,
    userInfo:{}
  });

  useEffect(() => {
    axios
    .get("http://localhost:8000/api/user/login_check", { withCredentials: true })
    .then((res) => {
      setLoggedUser(prevData => ({
        ...prevData,
        check:true,
        userInfo:res.data
      }));
    })
    .catch(console.log);
  }, [])

  return (
    <div>
      <UserContext.Provider value={{ loggedUser, setLoggedUser }}>
        <Router>
          <Home path="/" />
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
