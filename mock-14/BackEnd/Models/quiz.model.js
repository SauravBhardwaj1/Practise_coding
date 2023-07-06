const mongoose =require("mongoose")


const QuizSchema=mongoose.Schema({
    title :{type:String},
    creator :{type:String},
    description:{type:String},
    questions:Array,
    leaderboard:Array,
    userid:{type:String},
   
},{
    versionKey:false
})





const QuizModel=mongoose.model("blog",QuizSchema)

module.exports={
  QuizModel
}



// {
//     "title" :"parag post 14",
// "body":"this is raw",
// "content":"srt",
// "category" :"enter",
// "date":"2022-5-4",
// "likes":20,
//    "comments" : [{"username" : "Jane", "content" : "Good One"}, {"username" : "Bob", "content" : "Loved It!"}]
// }