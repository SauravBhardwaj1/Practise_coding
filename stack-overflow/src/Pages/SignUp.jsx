import axios from "axios";
import { useState } from "react";
import { BaseUrl } from "../Assest/BaseUrl";
import { useNavigate } from "react-router-dom";


export default function Signup() {

  const [input,setInput] = useState({})
  const navigate = useNavigate()
 
  const handleInput =(e) =>{
     let {name,value} = e.target
     setInput({...input,[name]:value})
  }
  
  const handleForm =(e)=>{
    e.preventDefault()
    axios.post(`${BaseUrl}/users`,input)
    .then((res)=>{alert("Registered Success")
    navigate("/SignIn")
  })
    .catch((err)=>console.log(err.message))
  }


 
  
  return (
   <form onSubmit={handleForm} style={{display:"flex",flexDirection:"column"}}>
     <input onChange={handleInput} placeholder="UserName..." name='username' type='text'/>
     <input onChange={handleInput} placeholder="Avtar Url" name='avtar' type="url"/>
     <input onChange={handleInput} placeholder="email..." name='email' type="email"/>
     <input onChange={handleInput} placeholder="password" name='password' type='password'/>
     <input onChange={handleInput} type='submit' value={"SignUp"}/>
   </form>
  );
}
