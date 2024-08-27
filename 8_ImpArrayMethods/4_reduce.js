/*
reduce()
=========
The reduce method in JavaScript takes each value in an array, performs a specified operation on it, 
and stores the result in an accumulator. The accumulator is updated as the method iterates through 
the array, and after processing all elements, the final accumulated value is returned. 
This makes reduce powerful for summarizing or transforming arrays into a single output, 
such as a sum, product, or even a complex object.
---------------------------------------------------------------------------------------
Syntax:
let result = array.reduce(function(accumulator, currentValue, index, array) {
    // return the updated accumulator
}, initialValue);

or 

let result = array.reduce((accumulator, currentValue, index, array) => {
    // return the updated accumulator
}, initialValue);
-----------------------------------------------------------------------------------------
accumulator: The accumulator accumulates the callback's return values. 
             It is the accumulated value returned in the last invocation of the callback, or the initial value if provided.
currentValue: The current element being processed in the array.
index (optional): The index of the current element being processed.
array (optional): The array reduce was called upon.
initialValue (optional): A value to use as the first argument to the first call of the callback. 
                         If no initial value is supplied, the first element in the array will be used as the initial accumulator value, 
                         and the iteration will start from the second element.
*/
//========================================================================================
//Example 1 ==> find the sum of all element of the arrya.
const arr = [1, 2, 3, 4, 5];

let sum = arr.reduce((acc, val, index, arr) => {
  return acc + val;
}, 0);
console.log(sum);//15

//In this example, reduce is used to sum all elements in the array. 
//The accumulator starts at 0 (the initialValue), and each currentValue is added to it as the function iterates over the array.
//--------------------------------------=-------------------------
// Example 2 ==> Finding the Maximum Value in the number.
const arr = [7, 5, 4, 9, 6, 3, 3, 2];
let maxVal = arr.reduce((acc, val, index, arr) => {
  return val > acc ? val : acc;
}, 0);
console.log(maxVal);//9
//----------------------------------------------------------------
// Example 3 ==> Flattening an Array of Arrays
const arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

let newArr = arr.reduce((acc, val, index, arr) => {
  return acc.concat(val);
}, []);

console.log(newArr);
//-------------------------------------------------------------
// Example 4 ==> Counting Occurrences
let nums = [3, 4, 5, 6, 6, 5, 4, 3, 4, 5];

let map = nums.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});
console.log(map); //{ '3': 2, '4': 3, '5': 3, '6': 2 }
//=--------------------------------------------------------------
// Example 5 ==> counting the occurences of string

const items = [
  "apple",
  "banana",
  "orange",
  "apple",
  "orange",
  "banana",
  "banana",
];

let freq = items.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});

console.log(freq);//{ apple: 2, banana: 3, orange: 2 }
//================================================================
// Key Points
// The reduce method allows you to accumulate values from an array into a single result.
// It's versatile and can be used for operations like summing numbers, finding averages, flattening arrays, or even creating more complex data structures.
// The initialValue is crucial when using reduce to ensure the correct starting point for accumulation, especially if the array might be empty.
