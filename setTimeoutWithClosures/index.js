// function x(){
//     var a = 10

//     setTimeout(function(){
//         console.log(a)
//     }, 3000)
//     console.log("Closures are special functions in Javascript.")

//     setTimeout(function(){
//         console.log(a)
//     }, 3000)
//     console.log("Closures are special functions in Javascript.")
// }

// x()

function x(){
    for (var i = 1; i<=5 ; i++){
        setTimeout(function() {
            console.log(i)
        }, i * 1000)
    }
}

x()