import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";

function AllRoute() {
  return <Routes>
    <Route path="/" element={<SignUp/>}/>
    <Route path="/SignIn" element={<SignIn/>}/>
  </Routes>;
}

export default AllRoute;
