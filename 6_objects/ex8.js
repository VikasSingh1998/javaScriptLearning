// object destructuring
const student = {
  name: "vikas",
  roll: 12,
};
const val1 = student.name;
const val2 = student.roll;
console.log(val1, " ", val2); //vikas   12
//but we have shortcut to do this
//------------------------------------------
//we can do destructuring
const { name, roll } = student;
console.log(name); //vikas
console.log(roll); //12
//so here name and roll are 2 variable and its value will be assigned form the student object
//but here we have to keep the name of the variable similar to key object

let student={
  name:"vikas",
  roll:101,
  age:23,
  add:"rajpur",
};
const {v1,roll,age,add} =student;
console.log(v1,age,roll,add);//undefined 23 101 rajpur
//----------------------------------------------------
//but if we want to change the variable name we can do like this
const { name: nameval } = student;
console.log(nameval); //vikas
//------------------------------------
let { name: var1, ...restval } = student;
//here name will be assigned to var1
//remaining value will be assigned to restval as object
console.log(var1);//vikas
console.log(restval);//{roll: 12}
//=====================================
let student={
  name:"vikas",
  roll:101,
  age:23,
  add:"rajpur",
};
const {name:v1,...remVal} =student;
console.log(v1);//vikas
console.log(remVal);//{ roll: 101, age: 23, add: 'rajpur' }
//=========================================
// Q:Why Object destructuring is used?
// -----------------------------------------
/*
Object destructuring in JavaScript is used to extract values from objects 
and assign them to variables in a more concise and readable way. It allows 
you to unpack properties from an object directly into distinct variables 
without needing to access each property individually.

Here's why object destructuring is useful:
1. Conciseness
---------------
Instead of writing multiple lines to access object properties, you can destructure them in a single line. 
This reduces the amount of code and makes it more readable.

const student = {
  name: "vikas",
  roll: 12,
};

// Without destructuring
const val1 = student.name;
const val2 = student.roll;

// With destructuring
const { name, roll } = student;

2. Avoiding Repetition
--------------------------
You avoid repeating the object name every time you need to access a property, making your code cleaner.
// Without destructuring
console.log(student.name);
console.log(student.roll);

// With destructuring
const { name, roll } = student;
console.log(name);
console.log(roll);

3. Renaming Variables
-----------------------
You can rename variables when destructuring. This is useful when you want to use a 
different name for the variable than the object property.

const student = {
  name: "vikas",
  roll: 101,
};

// Renaming 'name' to 'nameVal'
const { name: nameVal } = student;
console.log(nameVal); // Output: vikas

4. Rest Operator
-----------------
The rest operator (...) allows you to capture the remaining properties of the object into a new object. 
This is useful when you need to separate out some properties and keep the rest together.
const student = {
  name: "vikas",
  roll: 101,
  age: 23,
  add: "rajpur",
};

// 'name' is assigned to 'v1', rest of the properties are stored in 'remVal'
const { name: v1, ...remVal } = student;
console.log(v1); // Output: vikas
console.log(remVal); // Output: { roll: 101, age: 23, add: 'rajpur' }

5. Default Values
------------------
You can also provide default values in case a property does not exist in the object.

const student = {
  name: "vikas",
};

const { name, roll = 0 } = student;
console.log(roll); // Output: 0 (since 'roll' was not defined in 'student')


=====================================================
Summary
=========
Object destructuring is used because it makes the code more concise, readable, and flexible. 
It provides a straightforward way to unpack values from objects, rename them, and handle the 
remaining properties efficiently.
*/
