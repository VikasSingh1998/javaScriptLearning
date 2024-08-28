/*call() vs apply() vs bind()
//=============================
In JavaScript, call(), apply(), and bind() are methods that allow you to control the context (this value) in which a function is executed. They are particularly useful when you want to borrow methods from one object and use them on another object.

call() Method
-------------
The call() method calls a function with a given this value and arguments provided individually.
Syntax:
functionName.call(thisArg, arg1, arg2, ...);
thisArg: The value to use as this inside the function.
arg1, arg2, ...: Arguments passed individually.
------------------------------------------------
apply() Method
---------------
The apply() method is similar to call(), but it takes the arguments as an array instead of individually.
Syntax:
functionName.apply(thisArg, [argsArray]);
thisArg: The value to use as this inside the function.
argsArray: An array of arguments.
--------------------------------------------------
bind() Method
-----------------
The bind() method returns a new function, permanently setting the this value to the provided thisArg. 
Unlike call() and apply(), bind() does not immediately invoke the function but instead returns a new function that can be called later.
Syntax:
const boundFunction = functionName.bind(thisArg, arg1, arg2, ...);
thisArg: The value to use as this inside the function.
arg1, arg2, ...: Arguments that will be passed to the function when it is invoked.
--------------------------------------------------
Key Differences
================
call(): Immediately invokes the function with a given this value and individual arguments.
apply(): Immediately invokes the function with a given this value and arguments as an array.
bind(): Returns a new function with a bound this value and optional preset arguments. The function can be invoked later.

Use Cases
==========
call() and apply() are useful when you want to borrow methods from one object to use on another, or when you need to pass a different this context to a function.
bind() is useful when you need a function with a fixed this context that can be invoked later, especially for event handlers or callbacks.
*/
//=======================================================
//EX 1===> how to use call()
function hello() {
  console.log("this is the hello function");
}
hello(); //this is the hello function
hello.call(); //this is the hello function
//we can use .call() on any function to call that function.
//-===========================================================
// Ex2 ==> SImple example for call()

//suppose we have 2 user object --> user1 and user2
const user1 = {
  name: "vikas",
  roll: 21,
  about: function () {
    console.log(`Name is ${this.name} and roll number is ${this.roll}`);
  },
};
const user2 = {
  name: "ravi",
  roll: 22,
};
user1.about(); //Name is vikas and roll number is 21
//we can use call() on this about funtion and pass the object.
user1.about.call(user1); //Name is vikas and roll number is 21
//SO we have to call the about function on  user1 object.
//------------------------------------------------
//user2 does not have about, which is function.
//But we want to use this about for user2 also. so we have to borrow it from the user1.
user1.about.call(user2); //Name is ravi and roll number is 22
// ==> Read like : U have to call about() function of the user1 on the user2 object.

//so we can call the about function on user1 object.
//For this we will use the call().
//------------------------------------------------
user1.about.call(); //Name is undefined and roll number is undefined
//=============================================================
// Ex3 ==> we have to pass the parameter in the call()
const user1 = {
  name: "vikas",
  roll: 21,
  about: function (age, mob) {
    console.log(
      `Name is ${this.name} and roll number is ${this.roll}, age is ${age} and mob is ${mob}`
    );
  },
};
const user2 = {
  name: "ravi",
  roll: 22,
};
user1.about.call(user1); //Name is vikas and roll number is 21, age is undefined and mob is undefined
user1.about.call(user1, 21, "9970771557"); //Name is vikas and roll number is 21, age is 21 and mob is 9970771557
//============================================================
//we can define this about method outside of the object and call on the particular object.
function about(age, mob) {
  console.log(
    `Name is ${this.name} and roll number is ${this.roll}, age is ${age} and mob is ${mob}`
  );
}
const user1 = {
  name: "vikas",
  roll: 21,
};
const user2 = {
  name: "ravi",
  roll: 22,
};
about.call(user1); //Name is vikas and roll number is 21, age is undefined and mob is undefined
about.call(user1, 21, "9970771557"); //Name is vikas and roll number is 21, age is 21 and mob is 9970771557
//call the about function on the user1 object.
about.call(user2, 31, "9990881557"); //Name is ravi and roll number is 22, age is 31 and mob is 9990881557
//=====================================================================================
// apply() ==> While using the apply() we will pass the argument into array.
//---------------------
about.apply(user2, [44, "343456566"]); //Name is ravi and roll number is 22, age is 44 and mob is 343456566
//=================================================================
// bind() ==> bind() return the fucntion which we can call later.
// -----------------
const f1 = about.bind(user2, "54", "343456566");
f1(); //Name is ravi and roll number is 22, age is 54 and mob is 343456566
//================================================================================
//Don't do this mistake
//======================
const user1 = {
  name: "vikas",
  roll: 21,
  about: function () {
    //console.log(this); //print the current object on which it is called.
    console.log(`Name is ${this.name} and roll number is ${this.roll}`);
  },
};
user1.about(); //Name is vikas and roll number is 21
//store the function ref in the variable.
const myFun = user1.about;
myFun(); //Name is undefined and roll number is undefined
// we are just storing the ref so it will not binding with this.
// TO bind the myFun withe the object we have to use bind() function.
const myFun1 = user1.about.bind(user1);
myFun1(); //Name is vikas and roll number is 21
//==============================================================
/*Arrow function behaviour
========================
Arrow function ka this nhi hota hai.
Arrow function jo this use krta hai, wo apne 1 level upper parent ka leta hai.

// ----------------------*/
// Example
const user1 = {
  name: "vikas",
  roll: 21,
  about: () => {
    // console.log(this); //print the current object on which it is called.
    console.log(`Name is ${this.name} and roll number is ${this.roll}`);
  },
};
user1.about(); //Name is undefined and roll number is undefined

//arrow function ka this hum change bhi nhi kr sakte.
user1.about.call(user1); //Name is undefined and roll number is undefined
//================================================================================
const user2 = {
  name: "vikas",
  roll: 21,
  about: function () {
    //console.log(this); //print the current object on which it is called.
    console.log(`Name is ${this.name} and roll number is ${this.roll}`);
  },
};
const user1 = {
  name: "vikas",
  roll: 21,
  about() {
    //console.log(this); //print the current object on which it is called.
    console.log(`Name is ${this.name} and roll number is ${this.roll}`);
  },
};
//both the way are same to create the function inside the object.
// ===================================================================================
