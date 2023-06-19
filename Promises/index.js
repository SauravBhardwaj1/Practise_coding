// Write a program to return resolve if value is less than 9 using promise


const fun = (a)=>{

     let promise = new Promise((resolve, reject)=>{

        // let value = 0;

        if(a < 9) {
            resolve(`number is given  ${a}`)
        }else{
            reject("error")
        }
     })

     promise.then((res)=> console.log(res))

}
fun(10)