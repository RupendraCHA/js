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

// Printing 1 to 5 numbers using let keyword

// function x(){
//     for (let i = 1; i<=5 ; i++){
//         setTimeout(function() {
//             console.log(i)
//         }, i * 1000)
//     }
// }

// x()

// printing 1 to 5 numbers using var keyword

function x() {
    for (var i = 1 ; i <= 5 ; i++){
        function close(x){
            setTimeout(function () {
                console.log(x)
            })
        }
        close(i)
    }

    console.log("Namaste Javascript - Closures & setTimeout")
}

x()