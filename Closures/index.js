// function x(){
//     var a = 30

//     return function y() {
//         console.log(a)
//     }
// }

// var z = x()
// console.log(z)
// z()

// function greet() {
//     var name = "Rupendra"

//     return function toRupendra(){
//         console.log("Welcome" + name)
//     }
// }

// var greetMsg = greet()

// console.log(greetMsg)

// greetMsg()

function z(){
    var b = 80;
    function x(){
        var a = 88
        function y(){
            console.log(a,b)
        }
        y()
    }
    return x
}
const a = z()
console.log(a)
a()