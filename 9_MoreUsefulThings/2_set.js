/* Set()
============
It is iterable ==> we can apply "for of" loop on Set.

Order is not guaranteed.
Index is not there, so we can not access the element using index.
Unique elements only(No duplicate allowed).
*/
// Ex1: Create a empty set and add elements into it.
const s1 = new Set();
s1.add(1);
s1.add(2);
s1.add(2);
s1.add(3);
s1.add(3);
console.log(s1); //Set(3) { 1, 2, 3 }
// console.log(s1.size()); //TypeError: s1.size is not a function
console.log(s1.size); //3
s1.delete(2);
console.log(s1); //Set(2) { 1, 3 }
console.log(s1.has(3)); //true
console.log(s1.has(2)); //false
//------------------------------------------------------
// Ex2: You can create a Set by using the Set constructor, optionally passing an iterable (like an array) to initialize the set with values.
//passing array to Set.
const mySet = new Set([1, 2, 3, 4, 4, 5]);
console.log(mySet); //Set(5) { 1, 2, 3, 4, 5 }
//-----------------------------
const mySet1 = new Set("abcabc");
console.log(mySet1); //Set(3) { 'a', 'b', 'c' }
//======================================================
/* Key Methods and Properties
add(value): Adds a new value to the Set. If the value already exists, it won't be added again.
delete(value): Removes a specific value from the Set.
has(value): Returns true if the value exists in the Set, otherwise false.
clear(): Removes all values from the Set.
size: Returns the number of values in the Set.
*/
//=======================================================
// Iterating Over a Set
// ------------------------
// Iterating using for of loop.
let s2 = new Set([3, 1, 5, 2, 1, 3, 4, 3]);
console.log(s2); //Set(5) { 3, 1, 5, 2, 4 }

for (let val of s2) {
  console.log(val); //3 1 5 2 4
}
//---------------------------
// Iterating using forEach method
s2.forEach((val, index, s) => {
  console.log(val);
  // console.log(index);//set has not index.
  console.log(s); //will print the set.
});
//========================================================
// Example: Removing Duplicates from an Array
// You can use a Set to easily remove duplicate values from an array:

let arr = [1, 2, 3, 4, 3, 2, 3, 4, 3, 2, 1];
const uniqueNum = [...new Set(arr)];
// const uniqueNum = new Set(arr);
console.log(uniqueNum); //[ 1, 2, 3, 4 ]
//========================================================
// Example: Working with Objects in a Set

let obj1 = {
  name: "vikas",
  roll: 102,
  age: 21,
};
let obj2 = {
  name: "ravi",
  roll: 103,
  age: 22,
};
const so = new Set();
so.add(obj1);
so.add(obj2);
so.add(obj2);
console.log(so);
/*
Set(2) {
  { name: 'vikas', roll: 102, age: 21 },
  { name: 'ravi', roll: 103, age: 22 }
}
*/
//===============================================
//Some more example.
const s5 = new Set();
const arr3 = ["vikas", "102", 26];
s5.add(1);
s5.add(2);
s5.add([1, 2, 3]); //it will store in the set
s5.add([1, 2, 3]); //it will also be stored,bez this array will be created at separate memory location.
s5.add(arr3);
s5.add(arr3); //not stores, bez this is already sotred.
console.log(s5); //Set(5) { 1, 2, [ 1, 2, 3 ], [ 1, 2, 3 ], [ 'vikas', '102', 26 ] }

//================================================
/* 
Key Points
===========
A Set is useful for storing unique values without worrying about duplicates.
It provides methods like add, delete, has, and clear to manage the data.
You can iterate over a Set using loops or the forEach method.
Set is particularly handy for operations like removing duplicates from arrays.
*/

