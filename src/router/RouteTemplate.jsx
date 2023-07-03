import React from "react";

import { useEffect } from "react";
import { Login } from "../page/LoginShop/Login";
import DashBroad from "../page/DashBroad/DashBroad";
import CartShopping from "../page/Cart/CartShopping";
import { Route, Routes, useNavigate } from "react-router-dom";

export default function RouteTemplate() {
  let navigate = useNavigate();

  useEffect(() => {
    const checked = localStorage.getItem("users");
    if (checked) {
      navigate("/dashboard");
      console.log("checked");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="dashboard" element={<DashBroad />} />
      <Route path="cart" element={<CartShopping />} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
}
