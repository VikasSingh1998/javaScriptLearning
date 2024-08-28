/*
Map
=====
==> Map is an iterable.
==> Store data in ordered fashion.
==> Store key-value pair.(like Object)
==> Duplicate key are not allowed like objects.
///--------------------------------------------
Difference Between Map and objects(object literal)
==> Object can only have string or symbol as key.
==> In map we can use anything as key like array, object,number, string etc.
*/
//===================================
// Creating a map
//-------------------
// You can create a Map by using the Map constructor.
// Optionally, you can pass an iterable (like an array of arrays) to initialize the Map with key-value pairs.

const myMap = new Map([
  ["key1", 10],
  ["key2", 20],
]);
console.log(myMap); //Map(2) { 'key1' => 10, 'key2' => 20 }
myMap.set("key3", 30);
myMap.set("key2", 40); //update the key2
console.log(myMap); //Map(3) { 'key1' => 10, 'key2' => 40, 'key3' => 30 }
console.log(myMap.get("key1")); //10
console.log(myMap.has("key1")); //true
console.log(myMap.has("key4")); //false
myMap.delete("key2");
console.log(myMap); //Map(2) { 'key1' => 10, 'key3' => 30 }
console.log(myMap.size); //2
//========================================
// Key methods and properties.
// --------------------------------
// set(key, value)  -->  Adds or updates a key-value pair in the Map.
// get(key) -->  Returns the value associated with the given key. If the key is not found, it returns undefined.
// has(key) --> Returns true if the key exists in the Map, otherwise false.
// delete(key) --> Removes the key-value pair associated with the specified key.
// size -->  Returns the number of key-value pairs in the Map.
// clear() --> Removes all key-value pairs from the Map.
//=========================================
// Iterating Over a Map
//----------------------
//By using for of loop

let m1 = [
  ["k1", 10],
  ["k2", 20],
  ["k3", 30],
];
for (let [key, val] of m1) {
  console.log(key); //print each key
  console.log(val); //print each val
}
//-------------------------
//By using forEach method
m1.forEach((val, index, array) => {
  console.log(val); //sub array will be passed as val
  console.log(index);
  console.log(array); //it will print whole Map object
});
/*
[ 'k1', 10 ]
0
[ [ 'k1', 10 ], [ 'k2', 20 ], [ 'k3', 30 ] ]
[ 'k2', 20 ]
1
[ [ 'k1', 10 ], [ 'k2', 20 ], [ 'k3', 30 ] ]
[ 'k3', 30 ]
2
[ [ 'k1', 10 ], [ 'k2', 20 ], [ 'k3', 30 ] ]

//-------------------------------
When using the forEach method on an array like m1, which contains sub-arrays, 
the forEach method will pass each sub-array as a single element to the callback function. 
The forEach method takes a callback function with three parameters: element, index, and array.
//------------------------------
// So here val will be sub array so we have to destructure the subarray.
*/

// Using forEach with destructuring
m1.forEach(([key, val], index, array) => {
  console.log(key); //print each key
  console.log(val); //print each val
});
// Destructuring: The [key, val] syntax inside the forEach callback destructures each sub-array into key and val.
//===============================================================================================================
// Example: Using Objects as Keys
// Unlike objects, where keys are typically strings, a Map allows you to use objects as keys.

let obj1 = {
  name: "vikas1",
  roll: 1,
};
let obj2 = {
  name: "vikas2",
  roll: 2,
};
let obj3 = {
  name: "vikas3",
  roll: 3,
};
//we cak keep object as key in the Map.
const map2 = new Map();
map2.set(obj1, "this is obj1");
map2.set(obj2, "this is obj2");
map2.set(obj3, "this is obj3");
console.log(map2);
/*
Map(3) {
  { name: 'vikas1', roll: 1 } => 'this is obj1',
  { name: 'vikas2', roll: 2 } => 'this is obj2',
  { name: 'vikas3', roll: 3 } => 'this is obj3'
}
*/
console.log(map2.has({ name: "vikas2", roll: 2 })); //false
/*
The reason map2.has({ name: "vikas2", roll: 2 }) returns false is due to how object comparison works in JavaScript.

Object Identity in JavaScript
In JavaScript, objects are compared by reference, not by value. This means that two objects are considered equal (===) only if they refer to the exact same instance in memory.

map2.has({ name: "vikas2", roll: 2 }), you're creating a new object with the same properties as obj2, but this new object is stored at a different memory location. 
Even though it has the same properties, it's not the same object as obj2 in terms of reference.
*/
console.log(obj2 === { name: "vikas2", roll: 2 }); // false

// To check if the Map has a key corresponding to obj2, you should use the original reference
console.log(map2.has(obj2)); //true
//==================================================================================================
// Example: Converting an Object to a Map
// You can convert a regular object to a Map using Object.entries.

const obj = { a: 1, b: 2, c: 3 };
const mapFromObj = new Map(Object.entries(obj));

console.log(mapFromObj); //Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }
//=========================================================================
// Example: Converting a Map to an Object
// You can also convert a Map back into an object using Object.fromEntries.
const myMap1 = new Map([
  ["a", 1],
  ["b", 2],
]);

const objFromMap = Object.fromEntries(myMap1);
console.log(objFromMap); //{ a: 1, b: 2 }
// You can easily convert between Map and objects or arrays.
//==========================================================================
//more example
const m2 = new Map();
m2.set(1, "vikas"); //number as key
m2.set("name", "vikas"); //string as key
m2.set({ 1: "a", 2: "b" }, "this is object as key val"); //object literal
for (let k of m2.keys()) {
  console.log(k);
  console.log(typeof k);
}
/*
1
number
name
string
{ '1': 'a', '2': 'b' }
object
*/
//here in Map key can be anything but in object literal key will always be string.
const obj4 = { 1: "a", 2: "b" };
for (let [k, v] in obj4) {
  console.log(k);
  console.log(typeof k);
}
/*
1
string
2
string
*/
console.log(Object.keys(obj4)); //[ '1', '2' ]
console.log(Object.values(obj4)); //[ 'a', 'b' ]
console.log(Object.entries(obj4)); //[ [ '1', 'a' ], [ '2', 'b' ] ]
//===============================================================================

