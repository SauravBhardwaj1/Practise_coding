
// Promises

// make one sleep function for 2000 sec

const sleep = (time)=>{
    return new Promise((resolve, reject)=>{
        if(typeof time !== "number"){
            reject("Something went wrong")
            return
        }
        setTimeout(()=>{
            resolve()
        },time)
    })
    
}

sleep(3000)
.then((res)=> console.log("successfully sleep"))
.catch((err)=> console.log(err))