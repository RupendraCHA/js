

// Calculate are for given radiuses

let radius = [3,1,2,4]

const calculateRadiuses = function(radius){
    const output = []
    for (let i = 0; i < radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i])
    }

    return output
}

console.log(calculateRadiuses(radius))