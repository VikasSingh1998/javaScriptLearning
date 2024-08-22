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
// =====================================================================================