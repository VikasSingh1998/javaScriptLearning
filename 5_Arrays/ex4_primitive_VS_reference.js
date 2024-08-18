//primitive type
let num1 = 6;
let num2 = num1;
console.log("num1 is:", num1);//6
console.log("num2 is:", num2);//6
//now increment the num1 by 1.
num1++;
console.log("num1 is:", num1);//7
console.log("num2 is:", num2);//6

//=================================
//reference type.
let arr1 = [1,2,3,4];
let arr2 = arr1;
console.log("arr1 is: ",arr1);//[1,2,3,4]
console.log("arr2 is: ",arr2);//[1,2,3,4]

arr1.push(10);
console.log("arr1 is: ",arr1);//[1,2,3,4,10]
console.log("arr2 is: ",arr2);//[1,2,3,4,10]

//so if we are changing the arr1, it is reflecting into the arr2.
//array are reference type ==> array is same but arr1 and arr2 are the reference to that array.
 
//    arr1 ---> []
//    arr2   --/
//====================================================
/*
In JavaScript:
=================
Primitive Types:
Number: Numeric values.
String: Textual data.
Boolean: true or false.
Undefined: Uninitialized variables.
Null: Intentional absence of an object value.
Symbol: Unique identifier.

Reference Types:
=================
Object: Collection of key-value pairs.
Array: Ordered list of values.
Function: Reusable block of code.
Date: Represents date and time.
RegExp: Pattern for matching strings.
Custom Objects: Created using constructors or classes.
Note:
Primitive types are immutable.
Reference types are mutable, and their values can be modified directly.
Understanding this distinction is important for how values are passed and manipulated in JavaScript.

*/