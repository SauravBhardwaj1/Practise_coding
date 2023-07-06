import React from 'react'
import { login } from "../Redux/PostReducer/action"
import {useDispatch,useSelector} from "react-redux"
import { useState } from 'react'
import {Navigate} from "react-router-dom"


const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
   

    const dispatch=useDispatch()

    const state1=useSelector((store)=> store.authreducer)

    const handelSubmit=(e)=>{
        e.preventDefault() 
        const userData={
            email,password
        }
       
        dispatch(login(userData))
        // if(state1.isAuth){
          
        //   alert("Login Successful")
        // }
setEmail("")
setPassword("")
    }

    if(state1.isAuth){
      alert("Login Successful")
      
   return   <Navigate to="/dashboard"/>
    }else{
      return (
        <div>
            <form onSubmit={handelSubmit}>
                <h1>User signin</h1>
               {/* {state1.isAuth?alert("Login Successful"):""} */}
                
                <label htmlFor="">Email:  </label>
                <input type="text" placeholder='enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <br />
                <label htmlFor="">Password:  </label>
                <input type="password" placeholder='enter your password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <br />
    <button>Login</button>
    
            </form>
        </div>
      )
    }


}

export default Login