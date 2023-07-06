const jwt = require('jsonwebtoken');


const auth=(req,res,next)=>{
const token=req.headers.authorization
if(token){
    try{
        jwt.verify(token, 'masai', (err, decoded)=> {
            if(decoded){
                req.body.userid=decoded.userid
                req.body.creator=decoded.creator
                next()
            }else{
                res.send({"msg":"Wrong Credensial"})
            }
            
          });
    }catch(er){
        res.send(er.message)
    }
}else{
    res.send({"msg":"Wrong Credensial"})
}
}     


module.exports={
    auth
}