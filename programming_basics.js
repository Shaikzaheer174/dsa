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

// write a function that returns second largest number in an array.
const arrayToFindSecondLargest = [4, 9, 0, 2, 8, 7, 1];

function secondLargest(arr) {
  if (arr.length < 2) {
    return null;
  }
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

const secondLargestNum = secondLargest(arrayToFindSecondLargest);
console.log(secondLargestNum);

// write a function that returns second smallest number in an array.
const arrayToFindSecondSmallest = [4, 9, 0, 2, 8, 7, 1];

function secondSmallestNum(arr) {
  if (arr.length < 2) {
    return null;
  }
  let firstSmallest = Infinity;
  let secondSmallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < firstSmallest) {
      secondSmallest = firstSmallest;
      firstSmallest = arr[i];
    } else if (arr[i] < secondSmallest) {
      secondSmallest = arr[i];
    }
  }
  return secondSmallest;
}

const secondSmallest = secondSmallestNum(arrayToFindSecondSmallest);
console.log(secondSmallest); //1

// more clear and fixed version:
// In the else if block, you should make sure the value isn’t equal to firstSmallest, otherwise duplicates can cause wrong results.
const arr = [1, 1, 2];
const arr1 = [2];
// Your code would set:
// firstSmallest = 1
// secondSmallest = 1 (duplicate, not the actual second smallest)
// Output → 1 (incorrect, expected 2)
function secondSmallNum(arr) {
  if (arr.length < 2) {
    return null;
  }
  let firstSmallest = Infinity;
  let secondSmallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < firstSmallest) {
      secondSmallest = firstSmallest;
      firstSmallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== firstSmallest) {
      secondSmallest = arr[i];
    }
  }

  return secondSmallest === Infinity ? null : secondSmallest;
}

const secondSmall = secondSmallNum(arr1);
console.log(secondSmall); //null

const secondSmallestNumber = secondSmallNum(arr);
console.log(secondSmallestNumber); //2


// patterns:
for (let i = 0; i < 4; i++) {
  let row = "";
  for (let j = 0; j < 4; j++) {
    row = row + "*";
  }
  console.log(row);
}
/*
output:
 ****
 ****
 ****
 ****
 */

//
for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}

/**
1
12
123
1234
12345 
*/

n = 5;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - i; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}
// 12345
// 1234
// 123
// 12
// 1