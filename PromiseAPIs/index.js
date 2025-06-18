
// Promise.all()

// ALL SUCCESS

// const allP1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P1 is resolved."), 3000)
// })

// const allP2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P2 is resolved."), 5000)
// })

// const allP3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P3 is resolved."), 4000)
// })

// const allP4 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P4 is resolved."), 6000)
// })

// const allP5 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P5 is resolved after 8 seconds."), 8000)
// })

// ANYONE ERROR

// const allP1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P1 is resolved."), 3000)
// })

// const allP2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("P2 is Rejected after 4 seconds."), 4000)
// })

// const allP3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P3 is resolved."), 1000)
// })

// const allP4 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P4 is resolved."), 2000)
// })

// const allP5 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P5 is resolved."), 2000)
// })



async function runPromiseAll() {

    try {
        const promiseAllResult = await Promise.all([allP1, allP2, allP3, allP4, allP5])
    console.log(promiseAllResult)
    } catch (error) {
        console.error(error)
    }
}

// runPromiseAll()

// Promise All Settled

// All resolved/Success

// const allP1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P1 is resolved."), 3000)
// })

// const allP2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P2 is resolved."), 4000)
// })

// const allP3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P3 is resolved."), 1000)
// })

// const allP4 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P4 is resolved."), 2000)
// })

// const allP5 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P5 is resolved."), 5000)
// })

// Promises with rejections or failures

// const allP1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P1 is resolved."), 3000)
// })

// const allP2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("P2 is failed."), 4000)
// })

// const allP3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P3 is resolved."), 1000)
// })

// const allP4 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("P4 is failed."), 2000)
// })

// const allP5 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("P5 is resolved."), 5000)
// })



async function runAllSettled() {
    try {
        const promiseAllSettledResult = await Promise.allSettled([allP1, allP2, allP3, allP4, allP5])
        console.log(promiseAllSettledResult)
    } catch (error) {
        console.error(error)
    }
}

// runAllSettled()

// Promise Race


// const allP1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P1 is resolved."), 3000)
// })

// const allP2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("P2 is rejected."), 1000)
// })

// const allP3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P3 is resolved."), 2000)
// })

// const allP4 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P4 is resolved."), 4000)
// })

// const allP5 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P5 is resolved."), 5000)
// })


async function runPromiseRace() {
    try {
        const promiseRaceResult = await Promise.race([allP1, allP2, allP3, allP4, allP5])
        console.log(promiseRaceResult)
    } catch (error) {
        console.error(error)
    }
}

// runPromiseRace()

// Promise Any

// const allP1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P1 is resolved."), 30000)
// })

// const allP2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("P2 is rejected."), 1000)
// })

// const allP3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P3 is resolved."), 8000)
// })

// const allP4 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P4 is resolved."), 4000)
// })

// const allP5 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P5 is resolved."), 5000)
// })

// All rejected

const allP1 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P1 is rejected."), 3000)
})

const allP2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P2 is rejected."), 1000)
})

const allP3 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P3 is rejected."), 2000)
})

const allP4 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P4 is rejected."), 4000)
})

const allP5 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P5 is rejected."), 5000)
})

async function runPromiseAny() {

    try {
        const promiseAnyResult = await Promise.any([allP1, allP2, allP3, allP4, allP5])
    console.log(promiseAnyResult)
    } catch (error) {
        console.error(error)
    }
    
}

runPromiseAny()