/* 4. Immediately Invoked Function Expressions (IIFE)
=====================================================
Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined. 
They are typically used to create a local scope for variables to prevent them from polluting the global scope.

Syntax:
(function (){ 
// Function Logic Here. 
})();
Immediately Invoked: The function is immediately executed by adding () at the end of the function expression:
===========================================*/
//==========================================
//Example 1:
(function() {
    console.log("IIFE executed!");
})();
//Explanation: The function is wrapped in parentheses (function() { ... }), followed by () to immediately invoke it.
//==============================================================================
// Example 2: Here’s another example of an IIFE that stores and display result.
let val = (function(){
    console.log("IIFE");
})();
console.log(val);//undefined-> bez IIFE is not returning anything.
//-------------------------------------
var result = (function() {
    var x = 10;
    var y = 20;
    return x + y;
})();
console.log(result); // Output: 30
/*
Explanation: 
The IIFE is immediately invoked and returns the sum of x and y. 
The result of the IIFE, which is 30, is assigned to the variable result.
IIFEs are commonly used to create private scope in JavaScript, 
allowing variables and functions to be encapsulated and inaccessible from outside the function.
*/
//==============================================================================
// Example: Here’s an example demonstrating how an IIFE can be used to create private variables
  
  
  
  