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

// function z(){
//     var b = 80;
//     function x(){
//         var a = 88
//         function y(){
//             console.log(a,b)
//         }
//         y()
//     }
//     return x
// }
// const a = z()
// console.log(a)
// a()

// function outer(b){
//     let a = 10
//     function inner(){
//         console.log(a, b)
//     }
//     return inner
// }

// let close = outer("Welcome Rupendra")
// close()

function outest(){
    function outer(b){
    let a = 10
    function inner(){
        console.log(a, b)
    }
    return inner
}
return outer

}
outest()
let close = outest()
let inner = close("Welcome Rupendra Chandaluri")
inner()