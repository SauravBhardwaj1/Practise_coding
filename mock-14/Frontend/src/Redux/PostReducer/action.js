import { LOGIN_FAILUER,LOGIN_SUCCESS,LOGIN_REQUEST ,LOGIN_SUCCESS_POST} from "./actionTypes";

import axios from "axios";  

// const dispatch=useDispatch()         

// dispatch(login(userData))

export const login=(userData)=>(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
   return axios.post("https://mock14-3vxs.onrender.com/user/login",userData).then((res)=>{
    if(res.data.token!==undefined){
        localStorage.setItem("token",JSON.stringify(res.data.token))
        dispatch({
            type:LOGIN_SUCCESS,payload:res.data.token
        })
    }
   }).catch((err)=>dispatch({type:LOGIN_FAILUER}))

}        




export const register=(userData)=>(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
   return axios.post("https://mock14-3vxs.onrender.com/user/register",userData).then((res)=>dispatch({
        type:LOGIN_SUCCESS_POST
    })).catch((err)=>dispatch({type:LOGIN_FAILUER}))

}