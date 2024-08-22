
/*
filter ==> select and put only that element in the array which pass the given test
------------------------------------------------------------------------------------
The filter method in JavaScript is used to create a new array containing all elements of the original array 
that pass a specified test. The test is defined by a callback function, which returns true to keep the element 
or false to exclude it. The original array is not modified.

Syntax
-------
let newArray = array.filter(function(currentValue, index, array) {
    // return true to keep the element, or false to exclude it
});
---------  by using the arrow function---------
let newArray = array.filter((currentValue, index, array) => {
    // return true to keep the element, or false to exclude it
});

currentValue: The value of the current element being processed.
index (optional): The index of the current element.
array (optional): The array on which filter was called.
--------------------------------------------------------------
Key Points
------------
The filter method returns a new array with all elements that pass the test implemented by the provided function.
If no elements pass the test, an empty array will be returned.
filter does not modify the original array.
It is often used when you need to extract a subset of elements from an array based on certain conditions.
*/
//----------------------------------------------------------------------
// Example 1 ==> with arrow function

const arr = [1, 2, 3, 4, 5];
const newArr = arr.filter((val, index, arr) => {
  return val % 2 === 0;
});
console.log(newArr);//[ 2, 4 ]
-----------------------------------------------------------------------
// Example 2 ==> Example with Objects

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 19 },
];

const adults = users.filter((user) => {
  return user.age >= 18;
});

console.log(adults);//[ { name: 'Alice', age: 25 }, { name: 'Charlie', age: 19 } ]
//-------------------------------------------------------------------------------
// Example 3 ==> Filtering by String Length

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const longWords = words.filter((word) => {
  return word.length >= 6;
});
console.log(longWords);//[ 'exuberant', 'destruction', 'present' ]
//=================================================================================