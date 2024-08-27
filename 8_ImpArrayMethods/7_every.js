/*
every()
=========
The every() method in JavaScript is used to test whether all elements in an array pass the test implemented by the provided function. If all elements satisfy the condition, every() returns true. Otherwise, it returns false.

Syntax
--------
array.every(callback(element, index, array), thisArg);

Parameters
---------
callback: A function that is called for each element in the array. It takes the following arguments:
element: The current element being processed.
index (Optional): The index of the current element.
array (Optional): The array that every() was called on.
thisArg (Optional): An object to use as this inside the callback function.

Return Value
--------------
true: If all elements in the array pass the test.
false: If any element fails the test.
*/
//=======================================================================
//===============================================================
// 1. Checking if every element of the Array is Even Number
let arr = [1, 2, 3, 4, 5, 6];
let val = arr.every((val, index, arr) => {
  return val % 2 === 0;
});
console.log(val); //false
//------------------------------------------------------------------
// 2. Checking if every String in an Array is Longer than 4 Characters
let words = ["apple", "banana", "cherry", "date"];
let val = words.some((word, index) => {
  return word.length > 4;
});
console.log(val);//true
// ------------------------------------------------------------------
/*
Key Points
-----------
Early Termination: The every() method stops executing the callback function as soon as it finds an element that does not satisfy the condition.
Non-Mutating: every() does not change the original array.
Works on Any Iterable: It can be used on arrays of any type of elements, including numbers, strings, objects, etc.
The every() method is particularly useful when you need to ensure that all elements in an array meet a certain condition.
*/
