import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MenuContext } from "react-flexible-sliding-menu";

export default function Menu() {
    const {closeMenu} = useContext(MenuContext);
    return (
    <>
      <div className="Menu">
        <h1>Menu</h1>

        <nav onClick={closeMenu}>
          <NavLink to="/products">
            <span>Products</span>
          </NavLink>
          <NavLink to="/customers">
            <span>Customers</span>
          </NavLink>
          <NavLink to="orders">
            <span>Orders</span>
          </NavLink>
        </nav>
      </div>
    </>
  );
}
