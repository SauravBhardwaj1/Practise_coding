const toggler = ()=>{
    var arr= arguments

    var index=-1
    return function(){
        index=index+1
        return arr[index]
    }
}

const toggle = toggler(1,2,3)

console.log(toggle())
console.log(toggle())
console.log(toggle())
console.log(toggle())
console.log(toggle())