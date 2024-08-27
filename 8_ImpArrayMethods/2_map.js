
/*
map() ==> DO operation on each element and return new array.
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
