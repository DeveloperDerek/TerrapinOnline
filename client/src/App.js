import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import axios from "axios";
import { UserContext } from "./utils/UserContext";

import HomePage from "./views/HomePage";
import ProductPage from "./views/ProductPage";
import CartPage from "./views/CartPage";
import CarePage from "./views/CarePage";
import AnimalPage from "./views/AnimalPage";
import TermsAndConditionPage from "./views/TermsConditionPage";
import ShippingReturnPage from "./views/ShippingReturns";
import PrivacyNotice from "./views/PrivacyNotice";
import ContactPage from "./views/ContactPage";
import CreateProduct from "./views/CreateProduct";
import SuppliesPage from "./views/SuppliesPage";
import CategoryPage from "./views/CategoryPage";
import ProfilePage from "./views/ProfilePage";
import OrderPage from "./views/OrderPage";

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
          <HomePage path="/" />
          <ProductPage path="/product/:id" />
          <CartPage path="/cart" />
          <CarePage path="/care-guide" />
          <AnimalPage path="/about/:id" /> 
          <TermsAndConditionPage path="/terms-and-condition" />
          <ShippingReturnPage path="/shipping-and-return" />
          <PrivacyNotice path="/privacy-notice" />
          <ContactPage path="/contact-us" />
          <CreateProduct path="/create-product" />
          <SuppliesPage path="/supplies" />
          <CategoryPage path="/category/:name/:id" />
          <ProfilePage path="/profile" />
          <OrderPage path="/order/:id" />
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
