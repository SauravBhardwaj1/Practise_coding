import React from 'react'
import { NavLink } from "react-router-dom";
const Links=[
  {path:"/",title:"Home"},
    {path:"/login",title:"Sign In"},
    {path:"/signup",title:"SignUp"},
    {path:"/dashboard",title:"DashBoard"},
    {path:"/quiz",title:"Quiz"},
    {path:"/leaderboard",title:"Leaderboard"},
]         

const NavBar = () => {
  return (
    <div>
 {Links.map((el)=>{
            return <NavLink style={{gap:"30px",padding:"20px"}}
             key={el.path} to={el.path}>{el.title}</NavLink>
        })}
    </div>
  )
}

export default NavBar