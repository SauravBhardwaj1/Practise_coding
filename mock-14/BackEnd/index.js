const express=require("express")
require('dotenv').config()
const cors =require("cors")
const {connection}=require("./db")
// const {auth}=require("./Middlewar/auth")
const {userRouter}=require("./Routes/users.route")
 const {quizRouter}=require("./Routes/quiz.route")




const app=express()


app.use(express.json()) // inbuild middleware
app.use(cors())   //community Middelware




app.get("/",(req,res)=>{
    res.send("HOME ROUTE")
})

app.use("/user",userRouter)
app.use("/quiz",quizRouter)



app.listen(process.env.PORT,async()=>{
    try{
await connection
console.log("Connected to DB")
    }catch(er){
console.log(er)
    }
console.log(`server is running at ${process.env.PORT}`)
})