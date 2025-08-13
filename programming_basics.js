// Functions:
function printHelloWorld() {
  console.log("Hello world!");
}
printHelloWorld();

function sum(num1, num2) {
  let total = num1 + num2;
  console.log(total);
}

sum(2, 3);

function mmultiplication(num1, num2) {
  return num1 * num2;
}

console.log(mmultiplication(2, 3));

// Create a function which accepts the age and tells whether a person is eligible to vote or not.
function eligibleToVote(age) {
  if (typeof age !== "number" || isNaN(age)) {
    throw new Error("Age must be a valid number.");
  }
  if (age < 0) {
    throw new Error("Age cannot be negative.");
  } else if (age < 18) {
    return "You are not eligible to vote.";
  } else {
    return "You are eligible to vote.";
  }
}

try {
  const message = eligibleToVote(22);
  console.log(message);
} catch (e) {
  console.log(e.message);
}

// Write a program to print all even numbers from an array:
let numArrays = [10, 3, 5, 2, 7, 6, 9];
for (let i = 0; i < numArrays.length; i++) {
  if (numArrays[i] % 2 === 0) {
    console.log(numArrays[i]);
  }
}

//Write a function to find the largest number of an array:
let array = [1, 2, 33, 4, 5, 6];
// let array = [-3, -8 - 19]; //-3
function findLargest(arr) {
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
const large = findLargest(array);
console.log(large, "Maximum");

//Write a function to find the Smallest number of an array:
const minArray = [-1, 2, 3, 55, 40, 10];
function findMin(arr) {
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
const minNum = findMin(minArray);
console.log(minNum, "Minimum");

// Write a function that returns the number of negative numbers in an array.
const negArray = [2, -6, 4, 8, 1, -9];
function countNegativeNumbers(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      counter++;
    }
  }
  return counter;
}
const result = countNegativeNumbers(negArray);
console.log("Result:", result); // Output: 2
