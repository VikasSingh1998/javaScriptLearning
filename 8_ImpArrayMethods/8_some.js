/*
some()
=======
The some() method in JavaScript is used to check if at least one element in an array 
satisfies a given condition (i.e., a test function). If any element passes the test, 
some() returns true. Otherwise, it returns false.

This method does not modify the original array.

Syntax:
array.some(callback(element, index, array), thisArg);
----------------------------
Parameters
----------
callback: A function that is called for each element in the array. It takes the following arguments:
element: The current element being processed.
index (Optional): The index of the current element.
array (Optional): The array that some() was called on.
thisArg (Optional): An object to use as this inside the callback function.

Return Value
-------------
true: If at least one element in the array passes the test.
false: If no elements pass the test.
*/
//===============================================================
// 1. Checking if an Array Contains an Even Number
let arr = [1, 2, 3, 4, 5, 6];
let val = arr.some((val, index, arr) => {
  return val % 2 === 0;
});
console.log(val);//true
//------------------------------------------------------------------
// 2. Checking if Any String in an Array is Longer than 5 Characters
let words = ["apple", "banana", "cherry", "date"];
let val = words.some((word, index) => {
  return word.length >= 6;
});
console.log(val);
// ------------------------------------------------------------------
// 3. Checking an Empty Array
let words = [];
let val = words.some((word, index) => {
  return word.length >= 6;
});
console.log(val);
// Explanation: The some() method returns false when called on an empty array because there are no elements to test.
// ----------------------------------------------------------------------------------------------------------------
// Key Points
// Early Termination: The some() method stops executing the callback function as soon as it finds an element that satisfies the condition.
// Non-Mutating: some() does not change the original array.
// Works on Any Iterable: It can be used on arrays of any type of elements, including numbers, strings, objects, etc.
