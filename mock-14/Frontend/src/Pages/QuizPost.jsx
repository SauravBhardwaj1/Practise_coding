
     
import React, { useState } from 'react'
import { register } from '../Redux/PostReducer/action'
import {useDispatch} from "react-redux"
import { addquiz } from '../Redux/QuizReducer/action'

const initialState={
 
    title:"",
    description:"",
    questions:[
        {qtitle:"",
        answerOptions:[],
        correctOptions:[]}
    ]

}

const QuizPost = () => {
    const [data,setData]=useState(initialState)
    const dispatch=useDispatch()


    const handelChange=(e)=>{
        const {name,value}=e.target
        setData({...data,[name]:value})
    }

    const handelSubmit=(e)=>{
        e.preventDefault()
        dispatch(addquiz(data))
     console.log(data)
        alert("Quiz added  Successfully")
        setData(initialState)
    }

  return (
    <div>
        <br />
        <h1>Add Quiz</h1>
        <form action="" onSubmit={handelSubmit}>
            <label htmlFor="">Title:  </label>
            <input type="text" name="title" value={data.title} placeholder='Enter Title' onChange={handelChange}/> <br />
            <label htmlFor="">Description:  </label>
            <input type="text" name="description" value={data.description} placeholder='Enter Description' onChange={handelChange}/> <br />

            <label htmlFor="">Question 1:  </label>
            <input type="text" name="title" value={data.questions.qtitle} placeholder='Enter Question Title' onChange={handelChange}/> <br />
            <label htmlFor="">Options</label>
            <input type="text" name="answerOptions" value={data.questions.answerOptions} placeholder='Enter Question Title' onChange={handelChange}/> <br />

            <label htmlFor="">Correct option</label>
            <input type="text" name="answerOptions" value={data.questions.correctOptions} placeholder='Enter Question Title' onChange={handelChange}/> <br />
            <input type="submit" />
        </form>
    </div>       
  )
}

export default QuizPost