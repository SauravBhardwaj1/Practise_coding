const {UserModel}=require("../Models/users.model")
const jwt = require('jsonwebtoken');
const {Router}=require("express")
const bcrypt = require('bcrypt');

const userRouter=Router()


userRouter.post("/register",async(req,res)=>{

    const {email,password}=req.body
    try{
        const user1=await UserModel.findOne({email})
        if(user1){
            res.status(200).send({"msg":"User Already Registered Please Login"})
        }else{
            // const user=new UserModel(req.body)
            // await user.save()
            bcrypt.hash(password, 4, async(err, hash) =>{
                // Store hash in your password DB.
                const user=new UserModel({email,password:hash})
                await user.save()
                res.status(200).send({"msg":"User Has been Registered Successfully","user":req.body})
            });
        }


    }catch(er){
        res.status(200).send(er.message)
    }
})



userRouter.post('/login',async(req,res)=>{
    const {email,password}=req.body
    try{
const user1=await UserModel.findOne({email})
if(user1){
    bcrypt.compare(password, user1.password, (err, result) =>{
        // result == true
        if(result){
            const token = jwt.sign({ userid: user1._id ,creator:user1.email}, 'masai');
            res.status(200).send({"msg":"Login Successfull","token":token})
        }else{
            res.status(200).send({"msg":"Wrong Credencial"})
        }
    });
}else{
    res.status(200).send({"msg":"Wrong Credencial"})
}
    }catch(er){
        res.status(200).send(er.message)
    }
})







module.exports={
    userRouter
}




// "name":"Parag",
// "email":"gaik@gmail.com",
// "avatar":"https://avatars.githubusercontent.com/u/114162109?v=4",
// "password":"Parag@123"


// "email":"ravi@gmail.com",
// "password":"Ravi@123"
