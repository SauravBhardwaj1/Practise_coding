import React, { useState } from 'react'
import { register } from '../Redux/PostReducer/action'
import {useDispatch} from "react-redux"


const initialState={
 
    email:"",
    password:""
}

const SignUp = () => {
    const [data,setData]=useState(initialState)
    const dispatch=useDispatch()


    const handelChange=(e)=>{
        const {name,value}=e.target
        setData({...data,[name]:value})
    }

    const handelSubmit=(e)=>{
        e.preventDefault()
        dispatch(register(data))
        console.log(data)
        alert("User Registered Successfully")
        setData(initialState)
    }

  return (
    <div>
        <br />
        <h1>Sign Up </h1>
        <form action="" onSubmit={handelSubmit}>
            <label htmlFor="">Email:  </label>
            <input type="email" name="email" value={data.email} placeholder='Enter Your Email' onChange={handelChange}/> <br />
            <label htmlFor="">Name:  </label>
            <input type="password" name="password" value={data.password} placeholder='Enter Your Password' onChange={handelChange}/> <br />
            <input type="submit" />
        </form>
    </div>       
  )
}

export default SignUp