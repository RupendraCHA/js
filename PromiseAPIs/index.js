
// Promise.all()

// ALL SUCCESS

// const allP1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P1 is resolved."))
// })

// const allP2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P2 is resolved."))
// })

// const allP3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P3 is resolved."))
// })

// const allP4 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P4 is resolved."))
// })

// const allP5 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P5 is resolved."))
// })

// ANYONE ERROR

const allP1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P1 is resolved."))
})

const allP2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P2 is Rejected."))
})

const allP3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P3 is resolved."))
})

const allP4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P4 is resolved."))
})

const allP5 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P5 is resolved."))
})



async function runPromiseAll() {

    try {
        const promiseAllResult = await Promise.all([allP1, allP2, allP3, allP4, allP5])
    console.log(promiseAllResult)
    } catch (error) {
        console.log(error)
    }
}

runPromiseAll()