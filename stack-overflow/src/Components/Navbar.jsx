import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return<div>
    <NavLink to="/">SignUp</NavLink>
    <NavLink to="/SignIn">SignIn</NavLink>
  </div> ;
}

export default Navbar;
