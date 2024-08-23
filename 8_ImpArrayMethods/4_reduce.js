


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






