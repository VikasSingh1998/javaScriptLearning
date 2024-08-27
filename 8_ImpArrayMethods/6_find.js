/*
find() ==> find the first element which satisfy the given condition.
---------------------------------------------------------------------
The find() method in JavaScript is used to search an array for the first element that satisfies a 
given condition (predicate) provided by a callback function. It returns the value of the first element 
that passes the test. If no elements satisfy the condition, it returns undefined.
--------------------------
syntax
--------
array.find(callback(element, index, array), thisArg);
-------
callback: A function that is executed on each element in the array until it finds one where the function returns true.
element: The current element being processed in the array.
index (optional): The index of the current element being processed.
array (optional): The array that find was called on.
thisArg (optional): An object to use as this when executing the callback function.
*/
//-------------------------------------------------------------
//Example 1 ==> find the first even number which is at odd index
let arr = [3, 5, 7, 4, 5];
let val = arr.find((val, index, arr) => {
  console.log(val);
  console.log(index);
  console.log(arr);
  return val % 2 === 0 && index % 2 === 1;
});
console.log(val);
//----------------------------------------------------------
//Example 2 ==> find the first even number which is at odd index
let arr = [3, 5, 7, 4, 5];
let val = arr.find((val, index, arr) => {
  return val % 2 === 0 && index % 2 === 1;
});

console.log(val);//4
//------------------------------------------------------------
// Example 3 ==> Finding an Object by Property
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "Bharlie" },
];
// users.find((val, index, arr) => {
//   console.log(val);//print the value
//   console.log(index);//print the index
//   console.log(arr);//print the object
// });

let user = users.find((val) => {
  return val.id % 2 === 0;
});
console.log(user);//{ id: 2, name: 'Bob' }
//it return the first value which satisfy the condition.
// -------------------------------------------------------------
/*
Key Points
============
First Match: find returns the first element that satisfies the provided condition.
Returns undefined: If no elements satisfy the condition, find returns undefined.
Does Not Modify the Array: The original array is not modified by find.
Use Case: find is often used when you need to locate a specific element in an array, especially when working with arrays of objects.
*/
