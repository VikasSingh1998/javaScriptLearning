/*
Computed Properties in JavaScript
===================================
Computed properties allow you to dynamically define property keys in an object. 
Instead of hardcoding the key, you can use a variable or an expression inside 
square brackets [] as the key, and JavaScript will compute the key from the value of the expression.
 */
//we have to read the key and value both from the variables
let k1 = "name";
let k2 = "age";


let val1 = "vikas";
let val2 = "28";


// const obj = {};
// //we have to add key-value in this object from variable
// obj[k1] = val1;
// obj[k2] = val2;
//---------------
const obj = {
  [k1]: val1,
  [k2]: val2,
};
console.log(obj);