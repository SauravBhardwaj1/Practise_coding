const toggler = ()=>{
    var arr= arguments

    var index=-1
    return function(){
        index=index+1
        if(index>=arr.length){
            index=0
        }
        return arr[index]
    }
}

const toggle = toggler(1,2,3)

console.log(toggle())
console.log(toggle())
console.log(toggle())
console.log(toggle())
console.log(toggle())


function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.innerHTML === "Hello") {
      x.innerHTML = "Toggled text!";
    } else {
      x.innerHTML = "Hello";
    }
  }