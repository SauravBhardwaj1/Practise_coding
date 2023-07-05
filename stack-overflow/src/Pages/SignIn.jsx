import { useEffect, useState } from "react";
import { getLogin } from "../Redux/actionType";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { store } from "../Redux/store";
import { loginFaliureObj, loginSuccessObj } from "../Redux/action";


export default function SignIn() {

  const [input,setInput] = useState({})
  const [data,setData] = useState({})
  const dispatch = useDispatch()

  const {isAuth} = useSelector((store)=>store.loginReducer,shallowEqual)

  useEffect(()=>{
     getLogin(dispatch)
     .then((res)=>setData(res.data))
     .catch((err)=>dispatch(loginFaliureObj))
  },[])

  console.log(isAuth)
 
  const handleInput =(e) =>{
     let {name,value} = e.target
     setInput({...input,[name]:value})
  }
  
  const handleForm =(e)=>{
    e.preventDefault()
   let cred = data.filter((el)=>{
        if(el.email==input.email&&el.password==input.password){
            return el
        }
    })

    cred.length==1 && alert("login Success")
    
  }
  
  return (
   <form onSubmit={handleForm} style={{display:"flex",flexDirection:"column"}}>
     <input onChange={handleInput} placeholder="email..." name='email' type="email"/>
     <input onChange={handleInput} placeholder="password" name='password' type='password'/>
     <input onChange={handleInput} type='submit' value={"SignUp"}/>
   </form>
  );
}
