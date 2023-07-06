const {auth}=require("../middleware/auth")
const {Router}=require("express")
const {QuizModel}=require("../Models/quiz.model")



const quizRouter=Router()

quizRouter.post("/add",auth,async(req,res)=>{
    const {userid,creator}=req.body
    try{

    const post=new QuizModel(req.body)
    await post.save()
    res.status(200).send({"msg":"Quiz Made Successfully","post":req.body})

    }catch(er){
        res.status(400).send({"msg":er.message})
    }
})


quizRouter.get("/",auth,async(req,res)=>{

    try{
        const posts=await QuizModel.find()
        res.send({"data":posts})


    }catch(er){
res.send(er.message)
    }

})


quizRouter.patch("/update/:id",auth,async(req,res)=>{
    const {id}=req.params
    try{
        const posts=await QuizModel.findOne({_id:id})
        if(req.body.userid===posts.userid){
await QuizModel.findByIdAndUpdate({_id:id},{title:req.body.title, description:req.body. description})
res.send({"msg":"Data Updated Successfully"})
        }else{
            res.send({"msg":"You are Not authorized to do IT"})
        }

    }catch(er){
        res.send(er.message)
    }
})



quizRouter.delete("/delete/:id",auth,async(req,res)=>{
    const {id}=req.params
    const posts=await QuizModel.findOne({_id:id})
    try{
        if(posts.userid===req.body.userid){
            await QuizModel.findByIdAndDelete({_id:id})
            res.send({"msg":"Data Deleted Successfully"})
        }else{
            res.send({"msg":"You are Not authorized to do IT"}) 
        }

    }catch(er){
        res.send(er.message)
    }
})




// quizRouter.patch("/quiz/update/:id",auth,async(req,res)=>{
//     const {id}=req.params
//     const posts=await QuizModel.findOne({_id:id})
//     const {leaderboard,questions}=posts
//     try{
//         console.log(questions)
//         let aa=questions.correctOptions.map((el)=>el)
//         res.send(aa.join(""))

//     }catch(er){
// res.send(er.message)
//     }
// })


quizRouter.get("/leaderboard/:id",auth,async(req,res)=>{
    const {id}=req.params
    try{
            const posts=await QuizModel.findOne({_id:id})
    const {leaderboard}=posts
res.send(leaderboard)

    }catch(er){
        res.send(er.message)
    }
})




module.exports={
    quizRouter
}


// 648d56ca62b297faa55d8b6f