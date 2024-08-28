/* Optional Chaining
=======================
Optional chaining (?.) in JavaScript is a syntax feature that allows you 
to safely access deeply nested properties of an object without having to 
manually check each level for null or undefined. If a reference is null 
or undefined, the expression short-circuits and returns undefined instead 
of throwing an error.
*/
//===============================================
// Example 1
const user = {
  name: "vikas",
  address: {
    village: "rajpur",
    dist: "siwan",
    state: "Bihar",
  },
  phone: 999,
};
console.log(user.address.dist); //siwan
console.log(user.address?.post); //undefined
// If address is not there, it will give undefined.
//=================================================
// Avoiding Errors with Optional Chaining
//-----------------------------------------
// Without optional chaining, accessing properties on null or undefined would throw an error:
const user1 = null;
// console.log(user1.address);//TypeError: Cannot read properties of null

// Using optional chaining to remove the error if the accessing some value on null.
console.log(user1?.address); //undefined
//==================================================
// Optional Chaining with Arrays
// Optional chaining can be useful when working with arrays, particularly when accessing elements that might not exist

const users = [{ name: "Vikas" }, { name: "Arvind" }];

// Accessing an existing array element
console.log(users[1]?.name); // 'Arvind'

// Accessing a non-existing array element
console.log(users[2]?.name); // undefined
//===================================================
// Optional Chaining with Function Calls
// You can also use optional chaining when invoking functions or methods that might not exist
const funs = {
  fun1: function () {
    return "this is fun1";
  },
  fun2: function () {
    return "this is fun2";
  },
};
//safe function call
console.log(funs.fun1.apply()); //this is fun1
console.log(funs.fun2.apply()); //this is fun2
// console.log(funs.fun3.apply()); //TypeError: Cannot read properties of undefined
console.log(funs.fun3?.apply()); //undefined
//================================================
// Combining with Nullish Coalescing (??)
// Optional chaining is often combined with the nullish coalescing operator (??),
// which provides a default value when the result of the optional chaining is undefined or null.

const user3 = {
  name: "vikas",
  address: null,
};
//provide the defalut value if the address is null or default.
const city = user3.address?.city ?? "Default city is Bangaluru";
console.log(city); //Default city is Bangaluru
//====================================================
/*
Key Points
===========
Safe Access: Optional chaining allows you to access nested properties, methods, or array elements safely, without fear of errors when the object is null or undefined.
Short-Circuiting: If any part of the chain is null or undefined, the entire expression returns undefined.
Readability: It helps keep your code clean and readable by reducing the need for manual checks.
*/
