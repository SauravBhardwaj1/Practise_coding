import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'
import Dashboard from './Dashboard'
import Private from './Private'
import Home from './Home'
import Leaderboard from './Leaderboard'
import Quiz from './Quiz'
import QuizPost from './QuizPost'

const AllRoutes = () => {
  return (           
    <div>
        <Routes>
        <Route path="/" element={<Home/>}/> 
     <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/quizpost" element={<QuizPost/>}/>
    <Route path="/dashboard" element={<Private><Dashboard/></Private>}/>
    <Route path="/quiz" element={<Quiz/>}/>
    <Route path="/leaderboard" element={<Leaderboard/>}/>
</Routes>

    </div>
  )
}

export default AllRoutes