import React from 'react'
import { useState,useEffect } from 'react'
import { getquiz } from '../Redux/QuizReducer/action'
import {useDispatch,useSelector} from "react-redux"
import { useParams ,Link} from 'react-router-dom'
import { deletequiz } from '../Redux/QuizReducer/action'

const Dashboard = () => {

  
  const dispatch=useDispatch()

  const state=useSelector((store)=> store.quizreducer)

const handelDelete=(id)=>{
dispatch(deletequiz(id))
}

  useEffect(()=>{
dispatch(getquiz)
  },[state.quiz])
  return (        
    <div>

      <button style={{backgroundColor:"green",color:"white"}}><Link style={{color:"white"}} to="/quizpost">Create Quiz</Link></button>
<br />
    
{state.quiz?.map((el)=>{
  return <div style={{border:"solid black"}}>
    <h2>{el.title}</h2>
    <h4>{el.description}</h4>
    <p>created by:- {el.creator}</p>
    <p>Questions :- {el.questions.length}</p>
    <button style={{backgroundColor:"yellow"}} ><Link style={{color:"white"}}>Edit</Link></button>
    <button style={{backgroundColor:"red"}} onClick={()=>handelDelete(el._id)}>Delete</button>
    <button style={{backgroundColor:"blue"}}><Link style={{color:"white"}}>Take Quiz</Link></button>
    <button style={{backgroundColor:"blue"}}><Link style={{color:"white"}}>Take Quiz</Link></button>
  </div>
})}
    </div>
  )
}

export default Dashboard