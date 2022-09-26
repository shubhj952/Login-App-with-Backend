import React, { useContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { MenuContext } from "react-flexible-sliding-menu";
import Products from "./Products";
import Customers from "./Customers";
import Orders from "./Orders";

export default function Dashboard() {
  const { toggleMenu } = useContext(MenuContext);
  const navigate = useNavigate();

  const navigateToProducts = () => {
    navigate('/products');
  };

  const navigateToOrders = () => {
    navigate('/orders');
  };

  const navigateToCustomers = () => {
    navigate('/orders');
  };
  
  return (
    <>
    
    <button onClick={toggleMenu} className="primary-button justify-content-right">
        Slide Menu
      </button>
      
      <h1>Hi,{localStorage.getItem("username")}</h1>

      <Routes>
        <Route path="/products" onClick={navigateToProducts} element={ <Products /> } />
        <Route path="/customers" onClick={navigateToCustomers} element={ <Customers /> }/>
        <Route path="/orders" onClick={navigateToOrders} element={ <Orders /> } />
      </Routes>
    </>
  );
}
