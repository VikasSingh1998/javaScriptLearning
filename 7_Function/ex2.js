/* forEach ==> to access eeach element
============-----------------------------------------
The forEach method in JavaScript is a higher-order function that takes a callback function as its input. 
The callback function is executed once for each element in the array. 
The forEach method does not return anything (i.e., it returns undefined).

Callback Function Parameters
-----------------------------
The callback function passed to forEach can take up to three arguments:
Current Value (required): The current element being processed in the array.
Index (optional): The index of the current element being processed.
Array (optional): The array that forEach is being called on.

Syntax
--------
array.forEach(function(currentValue, index, array) {
    // your code here
});
currentValue: The value of the current element.
index: The index of the current element (optional).
array: The array on which forEach was called (optional).
=========================================================
*/
// example 1 
const numbers = [2, 4, 6];

numbers.forEach(function (curVal, index, array) {
  console.log(curVal);
  console.log(index);
  console.log(array);
});
/*
2
0
[ 2, 4, 6 ]

4
1
[ 2, 4, 6 ]

6
2
[ 2, 4, 6 ]

*/

// Example2 ==> Example with Arrow Function
const numbers = [2, 4, "vikas"];

numbers.forEach((curVal, index, array) => {
  console.log(curVal);
  console.log(index);
  console.log(array);
});
/*
2
0
[ 2, 4, 'vikas' ]
4
1
[ 2, 4, 'vikas' ]
vikas
2
[ 2, 4, 'vikas' ]

*/

// Example 3 ==> Modifying an Array (Not Recommended)
const arr = [1, 4, 3, 5];

arr.forEach((val, index, arr) => {
  arr[index] = val * 2;
});
console.log(arr);//[ 2, 8, 6, 10 ]
/*
In this example, forEach is used to modify the array itself by doubling each value. 
While this works, it's generally recommended to use map if you need to transform 
an array since forEach is intended for iteration rather than modification.
*/
=====================================================================================
/*
map() ==> DO operation on each element and return new value to store in new array.
======------------------------------------------------------------------------------------
It creates a new array by calling a function on every element of the original array 
and storing the results in a new array. map() returns the new array, 
and the original array is unchanged.

Syntax
---------
let newArray = array.map(function(currentValue, index, array) {
    // return the transformed value here
});

let newArray = array.map((curVal, index, array)=>{
//do some operation on val
});
currentValue: The value of the current element being processed.
index (optional): The index of the current element.
array (optional): The array on which map was called.
------------------------------------------------------
*/
// Example 1 ==> 
const arr = [1, 2, 3, 4];
const newArr = arr.map((val, index, arr) => {
  return val + index * 2; //do some operation on each array
});
console.log(newArr);//[ 1, 4, 7, 10 ]
// ----------------------------------------------
//Example 2==>
let names = ["vikas", "ravi", "prashant"];

let newArr = names.map((val, index, arr) => {
  console.log(val.length); // 5 4 8
  return val.length; //return to fill the new array.
});

console.log(newArr);//[ 5, 4, 8 ]
// ---------------------------------------------
// Example 3 ==> Converting Array of Objects

const users = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Doe" },
  { firstName: "Mark", lastName: "Smith" },
];

const fullNames = users.map((value, index, arr) => {
  console.log(value);//print the value
  console.log(index);//print the index
  console.log(arr);//print the arr

  return value.firstName + " " + value.lastName;
});

console.log(fullNames);//[ 'John Doe', 'Jane Doe', 'Mark Smith' ]
/*
Key Points
The map function always returns a new array with the same length as the original array.
If you don't return a value from the callback function, undefined will be added to the new array for that element.
map is commonly used when you want to transform the data in an array.
*/
// =======================================================================
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








