//In JS ==> arrays are reference types
//jitne bhi reference types hote hai ==> usko object bolte hai

let names = ["vikas", "ravi", "prashant"];
let obj = {}; //object literal

console.log(typeof names); //object
console.log(typeof obj); //object

//In JS there are different types of objects
//so how to know the types of objects
console.log(Array.isArray(names)); //true
console.log(Array.isArray(obj)); //false
//so to check if it is array or not --> we use isArray()
// Array.isArray(): This is a built-in JavaScript method used to specifically check if a variable is an array.

// Array.isArray(names) returns true because names is an array.
// Array.isArray(obj) returns false because obj is not an array; it's a plain object.
//==========================================================
// Reference Types: In JavaScript, arrays and objects are examples of reference types. 
// This means they don't store the actual values directly; instead, they store a reference (or pointer) to where the values are stored in memory.
//----------------------------------------------------------
/*
Value Types vs. Reference Types
=================================
In JavaScript, data types are broadly categorized into value types (also known as primitives) and reference types.

1. Value Types (Primitives)
Examples: number, string, boolean, null, undefined, symbol, and bigint.
These types hold the actual value. When you assign or pass a value type, a copy of the value is created.

let a = 10;
let b = a; // b is now a copy of a, so changing a will not affect b.
//----------------------
2. Reference Types
Examples: objects, arrays, functions, and dates.
These types do not store the actual value directly. Instead, they store a reference (or pointer) to the location in memory where the value is stored.
All reference types are treated as objects in JavaScript. This means they are instances of the Object class, even if they have special properties (like arrays).

let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2 is a reference to arr1, so changing arr1 will affect arr2.
arr1.push(4);
console.log(arr2); // Output: [1, 2, 3, 4]
//=================================================================
Why Are All Reference Types Considered Objects?
Objects: In JavaScript, the term "object" refers to any data structure that can hold properties and values. Objects can be simple key-value pairs, arrays, functions, or more complex structures.

Arrays as Objects: Even though arrays are used to store lists of values, they are technically objects because they are a type of reference that has additional methods and properties (like length, push(), etc.).

Functions as Objects: Functions are also objects in JavaScript, which means they can have properties and methods. This is why you can do things like:

function greet() {}
greet.someProperty = 'Hello';
console.log(greet.someProperty); // Outputs: Hello
*/