/*
splice()
========
In JavaScript, the splice() method is used to add, remove, or replace elements in an array. 
It modifies the original array and returns an array containing the deleted elements.
-----------------
Syntax:
array.splice(startIndex, deleteCount, item1, item2, ...);

Parameters
startIndex: The startIndex at which to start changing the array. If negative, it starts that many elements from the end of the array.
deleteCount: The number of elements to remove from the array. If 0, no elements are removed.
item1, item2, ... (Optional): The elements to add to the array, starting from the start index. If not specified, splice() will only remove elements.

*/
//===================================================================================
// Example 1 ==> Removing elements:

let array = [1, 2, 3, 4, 5];
let removed = array.splice(2, 2); // Removes 2 elements starting from index 2
console.log(array); // Output: [1, 2, 5]
console.log(removed); // Output: [3, 4]
// ----------------------------------------------------------------------------------
// Example 2 ==>  Adding elements

let array = [1, 2, 3, 4, 5];
array.splice(2, 0, 'a', 'b'); // Adds 'a' and 'b' at index 2
//Here deleteCount is 0, so we don't have to delete the element.
console.log(array); // Output: [1, 2, 'a', 'b', 3, 4, 5]
// -----------------------------------------------------------------------------------
// Example 3 ==> Replacing elements

let array = [1, 2, 3, 4, 5];
array.splice(2, 2, 'a', 'b'); // Replaces 2 elements starting from index 2 with 'a' and 'b'
console.log(array); // Output: [1, 2, 'a', 'b', 5]
//-------------------------------------------------------------------------------------
//=====================================================================================
// When the start parameter in the splice() method is negative, it indicates the position from the end of the array. 
// For example, -1 refers to the last element, -2 to the second-to-last element, and so on.
//--------------------------------------------------------------------------------------
// Example 1: Removing Elements with a Negative start Value

let array = [1, 2, 3, 4, 5];
let rmarr= array.splice(-2, 1); // Removes 1 element starting from the second-to-last element
console.log(array); //[1, 2, 3, 5]
console.log(rmarr); //[ 4 ]
//-------------------------------------------------------------------------------------
// Example 2: Adding Elements with a Negative start Value

let array = [1, 2, 3, 4, 5];
let rmarr = array.splice(-3, 0, 'a', 'b'); // Adds 'a' and 'b' before the third-to-last element
console.log(array); // [1, 2, 'a', 'b', 3, 4, 5]
console.log(rmarr); // []
//---------------------------------------------------------------------------------------
// Example 3: Replacing Elements with a Negative start Value

let array = [1, 2, 3, 4, 5];
array.splice(-3, 2, 'x', 'y'); // Replaces 2 elements starting from the third-to-last element
console.log(array); // Output: [1, 2, 'x', 'y', 5]
//--------------------------------------------------------------------------------------
// Example 4: Removing All Elements Starting from a Negative start Value

let array = [1, 2, 3, 4, 5];
array.splice(-3); // Removes all elements from the third-to-last to the end

console.log(array); // Output: [1, 2]
//--------------------------------------------------------------------------------------
// Key Points
// Modifies the original array: Unlike some other array methods, splice() changes the content of the array it is called on.
// Returns the removed elements: If no elements are removed, it returns an empty array.
