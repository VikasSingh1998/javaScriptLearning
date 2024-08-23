/*
sort()
========
The sort method in JavaScript is used to sort the elements of an array in place, 
meaning it modifies the original array. By default, it sorts the elements as strings 
in ascending order, which can lead to unexpected results when sorting numbers. 
However, you can customize the sorting behavior by providing a comparison function.

array.sort([compareFunction]);
compareFunction (optional): A function that defines the sort order. If omitted, the array elements are converted to 
                            strings and sorted in ascending lexicographical order (e.g., "10" comes before "2").

Key Points
-----------
In-Place Sorting: sort modifies the original array and returns the sorted array.
Default Behavior: Without a comparison function, sort converts elements to strings and sorts them lexicographically.
Custom Sorting: Use a comparison function to sort numbers or complex data types (e.g., objects).
*/
//==============================================================================================================
//Example 1 ==> Default Sorting(ascending lexicographical (dictionary) order)
const fruits = ["banana", "apple", "cherry", "date"];
fruits.sort();

console.log(fruits); //[ 'apple', 'banana', 'cherry', 'date' ]
//--------------------------------------------------------------
//Example 2 ==> Sorting Numbers Incorrectly
const numbers = [10, 2, 5, 1, 9];
numbers.sort();

console.log(numbers); //[ 1, 10, 2, 5, 9 ]
// Here, the numbers are sorted as strings, leading to incorrect results.
//--------------------------------------------------------------
/*
Sorting with a Comparison Function
-----------------------------------
To sort numbers or customize the sort order, you can pass a comparison function to sort. 

The comparison function takes two arguments and returns:
A negative value ==> if the first argument should come before the second.
Zero ==>  if they are considered equal.
A positive value ==> if the first argument should come after the second.
*/
//---------------------------------------------
// Example 3 ==> Sorting Numbers Correctly
const numbers = [10, 2, 5, 1, 9];
numbers.sort((a, b) => a - b);

console.log(numbers);//[ 1, 2, 5, 9, 10 ]
// In this example, the comparison function (a, b) => a - b sorts the numbers in ascending order.
//-----------------------------------------------------------------------------------------------
// Example 4 ==> Sorting Objects by a Property
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 30 },
];

users.sort((a, b) => a.age - b.age);
console.log(users);
/*
[
  { name: 'Bob', age: 20 },
  { name: 'Alice', age: 25 },
  { name: 'Charlie', age: 30 }
]
*/
//---------------------------------------------------

