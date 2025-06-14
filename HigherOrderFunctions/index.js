// Calculate area for circle with given radiuses

// Area of a Circle - π * r2

let radius = [3, 1, 2, 4];

const calculateRadiuses = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }

  return output;
};

console.log(calculateRadiuses(radius));

// Calculating circumference of a circle with give radiuses

// Circumference of a circle - 2 * π * r

const calculateCircumference = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }
  return output;
};

console.log(calculateCircumference(radius));

// Calculate Circle Diameter

// Diameter of a circle - 2 * r

const calculateDiameter = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * radius[i]);
  }
  return output;
};

console.log(calculateDiameter(radius));

// Using Higher Order Functions or taking Functional Approach

// Calculating Circle Area, Circumference and Diameter

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

Array.prototype.calculate = function (logic) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
    console.log("THIS", this);
  }
  return output;
};

const calculate = function (arr, logic) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(logic(arr[i]));
  }
  return output;
};
console.log("Map", radius.map(area));
console.log("Map", radius.map(circumference));

console.log("Map Like", radius.calculate(area));

console.log("Circle Area", calculate(radius, area));
// console.log("Circle Circumference", calculate(radius, circumference))
// console.log("Circle Diameter", calculate(radius, diameter))

// Map , Reduce and Filter

// Map

const array = [5, 4, 1, 7, 9, 6, 10];

const double = function (x) {
  return x * 2;
};

const triple = function (x) {
  return x * 3;
};

const binary = function (x) {
  return x.toString(2);
};

console.log("Original Array", array);
// console.log(array.__proto__.__proto__)
const doubleResult = array.map(double);

console.log("Double Result", doubleResult);

const tripleResult = array.map(triple);

console.log("Triple", tripleResult);

const binaryResult = array.map(binary);

console.log(binaryResult);

// Filter

const oddNums = function (x) {
  console.log(x % 2);
  return x % 2;
};

const evenNums = function (x) {
  return x % 2 === 0;
};

const oddNumbersOutput = array.filter(oddNums);

const evenNumbers = array.filter(evenNums);

console.log("Odd Numbers ", oddNumbersOutput);

console.log("Even Numbers", evenNumbers);

// reducer

// Finding Sum of all elements

function findSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}

const sumOfElements = findSum(array);

console.log(sumOfElements);

// Find Max

function findMax(array) {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

const maxValue = findMax(array);
console.log(maxValue);

const output = array.reduce((max, curr) => {
  if (curr > max) {
    acc = curr;
  }
  return acc;
}, 0);

console.log(output);

// Map

const users = [
  { firstname: "Rupendra", lastname: "Chandaluri", age: 25 },
  { firstname: "Gopi", lastname: "Chandaluri", age: 29 },
  { firstname: "Vasundhara", lastname: "Chandaluri", age: 46 },
  { firstname: "Chiranjeevi", lastname: "Chandaluri", age: 52 },
  { firstname: "Eleesha", lastname: "Gurrapsala", age: 25 },
];

//  Print full names

const fullnamesList = users.map(
  (person) => person.firstname + " " + person.lastname
);
console.log("FULL NAMES LIST", fullnamesList);

// Count no of people at certain age

const ageCount = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    // acc[curr.age] = ++acc[curr.age]
    acc[curr.age] += 1;
  } else {
    acc[curr.age] = 1;
  }

  return acc;
}, {});

console.log("AGE COUNT", ageCount);

// Printing firstname of the persons under age 30

let firsNamesArray = [];

const firstNames = users.filter((user) => {
  if (user.age < 30) {
    firsNamesArray.push(user.firstname);
  }

});
console.log(firsNamesArray);

// Anotherway

const firstname = users.filter((user) => user.age < 30).map((user) => user.firstname)

console.log("FIRST NAMES",firstname)