// Data accessing by everyone

// let count = 0

// function countIncrement() {
//     count++
//     return count
// }

// let count1 = countIncrement()
// console.log(count1)
// let count2 = countIncrement()
// console.log(count2)


// countIncrement()
// console.log(count)

// Data Hiding with Closure
function outest(){
    var b = 20
    function outer() {
    var a = 20

    function increment() {
        a++
        console.log(a)
    }
    increment()
}
outer()

}
outest()

// function outer() {
//     var a = 20

//     function increment() {
//         // a++
//         console.log(a)
//     }
//     increment()
// }

// outer()
// console.log(a)