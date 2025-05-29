
console.log("-----------")
console.log("Function Statement")


let c = 200
const d = 320

// Function Statement
function a(){
    var x = 10
    console.log(x)
}


function b(){
    var x = 100
    console.log(x)
}
a()
b()


// Function Expression
console.log("-----------")
console.log("Function Expression")



let x = function (){
    console.log("This is the Function Expression with Anonymous Function as a Value.")
}

console.log(x)
x()

let x1 = function abc(){
    console.log("This is the Function Expression with Named Function Expression as a Value.")
}

console.log(x1)
x1()

console.log("-----------")
console.log("Anonymous Function")
// Anonymous Function
// function (){

// }

console.log("-----------")
console.log("Named Function Expression")

let x2 = function abc(){
    console.log("abc function is in its Local Scope, not in Global Scope.")
    console.log(abc)
    console.log("This x2 is the Function Expression with Named Function Expression as a Value.")
}

console.log(x2)
x2()