import { QUIZ_FAIL,QUIZ_SUCCESS,QUIZ_REQUEST } from "./actionTypes";
import axios from "axios";



export const getquiz=(dispatch)=>{
    dispatch({type:QUIZ_REQUEST})
    return axios.get("https://mock14-3vxs.onrender.com/quiz",{
        headers:{
            Authorization:JSON.parse(localStorage.getItem("token"))
        }
    }).then((res)=>{
        console.log(res.data)
        dispatch({type:QUIZ_SUCCESS,payload:res.data.data})
    }).catch((er)=>{
        dispatch({type:QUIZ_FAIL})
    })
}


export const addquiz=(userData)=>(dispatch)=>{
    dispatch({type:QUIZ_REQUEST})
   return axios.post("https://mock14-3vxs.onrender.com/quiz/add",userData,{
    headers:{
        Authorization:JSON.parse(localStorage.getItem("token"))
    }
   }).then((res)=>dispatch({
        type:QUIZ_SUCCESS
    })).catch((err)=>dispatch({type:QUIZ_FAIL}))

}



export const deletequiz=(id)=>(dispatch)=>{ 
    dispatch({type:QUIZ_REQUEST})
    return axios.delete(`https://mock14-3vxs.onrender.com/quiz/delete/${id}`,{
        headers:{
            Authorization:JSON.parse(localStorage.getItem("token"))
        }
    }).then((res)=>{
        
        alert(res.data.msg)
    }).catch((er)=>{
        
        dispatch({type:QUIZ_FAIL})
    })
}