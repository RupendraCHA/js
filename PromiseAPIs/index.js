
// Promise.all()

// All Success
const allP1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P1 is successfully resolved."))
})

const allP2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P2 is successfully resolved."))
})

const allP3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P3 is successfully resolved."))
})

const allP4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P4 is successfully resolved."))
})

const allP5 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P5 is successfully resolved."))
})

async function runPromiseAll() {
    const promiseAllResult = await Promise.all([allP1, allP2, allP3, allP4, allP5])
    console.log(promiseAllResult)
}

runPromiseAll()