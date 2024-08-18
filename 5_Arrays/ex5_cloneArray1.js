//how to clone the array
let a1 = [1, 2, 3, 4];
let a2 = a1;//a1 and a2 will point to same array.
let a3 = [1, 2, 3, 4];
console.log(a1 === a2); //true
console.log(a1 === a3); //false
//a1 and a3 are different objects in heap
//===================================================
//to clone the array--> we will use slice()
// array.slice(startIndex, endIndex);
//----------------------------------------------------
//In JavaScript, the slice() method is used to extract a portion of an array and returns a new array containing the selected elements. 
// It does not modify the original array. The slice() method takes two optional parameters: the start index (inclusive) and the end index (exclusive) of the portion to be extracted. 
// If no parameters are provided, it creates a shallow copy of the entire array.

const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
const slicedFruits = fruits.slice(1, 4);
console.log(slicedFruits);
// Output: ['banana', 'orange', 'grape']
//-----------------------------------------------------
//Creating a shallow copy of the entire array:
const originalArray = [1, 2, 3, 4, 5];
const copiedArray = originalArray.slice();
console.log(copiedArray);
// Output: [1, 2, 3, 4, 5]
//------------------------------------------------------
// Using negative indices to count from the end:
const numbers = [10, 20, 30, 40, 50];
const portion = numbers.slice(-3, -1);
console.log(portion);
// Output: [30, 40]
//When you use a negative index, the counting starts from the last element, and -1 corresponds to the last element, -2 to the second-to-last element, and so on.
const numbers1 = [10, 20, 30, 40, 50];
console.log(numbers1[-1]); // Output: 50 (last element)
console.log(numbers1[-2]); // Output: 40 (second-to-last element)
//--------------------------------------------------------
// If no parameters are provided, it creates a shallow copy of the entire array:
const colors = ["red", "blue", "green"];
const copiedColors = colors.slice();
console.log(copiedColors);
// Output: ['red', 'blue', 'green']
//-----------------------------------------------------------
// Keep in mind that slice() does not modify the original array; it returns a new array with the selected elements.
