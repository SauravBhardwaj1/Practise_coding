import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import React from 'react'

const Private = ({children}) => {
    let {isAuth}=useSelector((store)=>store.authreducer)
 

if(!isAuth){     
 return   <Navigate to="/login"/>
}else{
    return children
}

 
}

export default Private