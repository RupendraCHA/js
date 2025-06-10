

// Calculate area for circle with given radiuses

// Area of a Circle - π * r2

let radius = [3,1,2,4]

const calculateRadiuses = function(radius){
    const output = []
    for (let i = 0; i < radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i])
    }

    return output
}

console.log(calculateRadiuses(radius))

// Calculating circumference of a circle with give radiuses

// Circumference of a circle - 2 * π * r

const calculateCircumference = function(radius) {
    const output = []
    for (let i = 0; i < radius.length ; i++){
        output.push(2 * Math.PI * radius[i])
    }
    return output
}

console.log(calculateCircumference(radius))

// Calculate Circle Diameter

// Diameter of a circle - 2 * r

const calculateDiameter = function(radius) {
    const output = []
    for (let i = 0; i < radius.length ; i++){
        output.push(2 * radius[i])
    }
    return output
}

console.log(calculateDiameter(radius))


// Using Higher Order Functions or taking Functional Approach

// Calculating Circle Area, Circumference and Diameter

const area = function (radius) {
    return Math.PI * radius * radius
}

const circumference = function (radius){
    return 2 * Math.PI * radius
}

const diameter = function (radius){
    return 2 * radius
}

Array.prototype.calculate = function (logic){
    let output = []
    for (let i = 0; i < this.length; i++){
        output.push(logic(this[i]))
        console.log("THIS", this)
    }
    return output
}

const calculate = function (arr, logic){
    let output = []
    for (let i = 0; i < arr.length; i++){
        output.push(logic(arr[i]))
    }
    return output
}
console.log("Map",radius.map(area))
console.log("Map",radius.map(circumference))

console.log("Map Like",radius.calculate(area))

console.log("Circle Area", calculate(radius, area))
// console.log("Circle Circumference", calculate(radius, circumference))
// console.log("Circle Diameter", calculate(radius, diameter))