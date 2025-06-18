
const p1 = new Promise(function(resolve, reject) {
    setTimeout(function(){

        resolve("Promise1 is resolved.")
    }, 40000)
})

const p2 = new Promise(function(resolve, reject) {
    setTimeout(function(){

        resolve("Promise2 is resolved.")
    }, 50000)
})


// async function getData(){
//     return p
// }

// const dataPromise = getData()

// dataPromise.then(res => console.log(res))

async function handlePromise(){
    console.log("Async Await is used to handle promises")

    const promise1 = await p1
    console.log(promise1)
    console.log("First Promise.")

    const promise2 = await p2
    console.log(promise2)
    console.log("Second Promise.")
}

handlePromise()