//we have to add a key by reading the value from a variable
const key = "mobile";
const person = {
  name: "vikas",
  age: 22,
  "person id": 1001,
};
//now we have to add a key as mobile by reading value from key variable
person[key] = "1234";//it will read value of key from the variable
console.log(person);
//{name: 'vikas', age: 22, person id: 1001, mobile: '1234'}
//if we will use .(dot) --> then it will not read the value from the key variable.
person.key = "12334";
console.log(person);
//{name: 'vikas', age: 22, person id: 1001, mobile: '1234', key: '12334'}
//---------------------
// =========================================================================================
/*
Understanding Bracket Notation vs. Dot Notation
Bracket Notation ([]):
=======================
When you use bracket notation, the expression inside the brackets is evaluated, and its value is used as the key.
This means if you have a variable key, using person[key] will look up the value of key and use that value as the property name in the object.
Example:
const key = "mobile";
person[key] = "1234"; // Adds a new property "mobile" with value "1234" to the object
console.log(person);
// Output: {name: 'vikas', age: 22, 'person id': 1001, mobile: '1234'}
-----------------------------------------------------
Dot Notation (.):
=================
Dot notation directly uses the literal string that follows the dot as the property name.
So, when you write person.key = "12334", JavaScript literally adds a property named "key" (not the value of the variable key) to the object.
Example:
person.key = "12334"; // Adds a new property "key" with value "12334" to the object
console.log(person);
// Output: {name: 'vikas', age: 22, 'person id': 1001, mobile: '1234', key: '12334'}
=================================================================================================
Why the Difference?
-------------------
Bracket Notation: The key is evaluated. If key = "mobile", person[key] is the same as person["mobile"].
Dot Notation: The key is taken literally. person.key means there's a property named "key" in the person object.

Conclusion
------------
Use Bracket Notation ([]) when you need to dynamically add a property using a variable's value.
Use Dot Notation (.) when you know the exact property name and don't need it to be dynamic.

*/