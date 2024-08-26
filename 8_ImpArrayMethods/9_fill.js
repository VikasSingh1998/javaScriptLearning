/*
fill()
======
The fill() method in JavaScript is used to fill all the elements of an array with a static value, from a start index 
to an end index. It modifies the original array and can be useful for quickly populating an array with a specific value.
---------------------------
Syntax:
array.fill(value, startIndex, endIndex)

Parameters
value: The value to fill the array with.
startIndex (Optional): The index at which to start filling. If omitted, it defaults to 0.
endIndex (Optional): The index at which to stop filling (not inclusive). If omitted, it defaults to the length of the array.
*/
//----------------------------------------------------------------------------------------------------------------
// 1. Filling the Entire Array

let array = [1, 2, 3, 4, 5];
array.fill(0);

console.log(array); // Output: [0, 0, 0, 0, 0]
// ------------------------------------------------
// 2. Filling a Portion of the Array

let array = [1, 2, 3, 4, 5];
array.fill(0, 2, 4);
console.log(array); // Output: [1, 2, 0, 0, 5]

// Explanation: The fill(0, 2, 4) method starts filling the array with 0 at index 2 and stops before index 4. 
// Therefore, only the elements at indices 2 and 3 are replaced.
// -------------------------------------------------
// 3. Filling from a Negative Start Index

let array = [1, 2, 3, 4, 5];
array.fill(0, -3);
console.log(array); // Output: [1, 2, 0, 0, 0]

// Explanation: The fill(0, -3) method starts filling with 0 from the third-to-last element (3) to the end of the array.
//------------------------------------------------------
// 4. Filling from a Start Index to the End of the Array

let array = [1, 2, 3, 4, 5];
array.fill(7, 1);
console.log(array); // Output: [1, 7, 7, 7, 7]
//-------------------------------------------------------
// Key Points
// ==========
// Modifies the Original Array: The fill() method directly modifies the array it is called on.
// Defaults: If start is not provided, it defaults to 0. If end is not provided, it defaults to the array's length.
// Negative Indices: You can use negative indices to count from the end of the array, where -1 is the last element.
// The fill() method is particularly useful for initializing arrays or resetting their values quickly.
