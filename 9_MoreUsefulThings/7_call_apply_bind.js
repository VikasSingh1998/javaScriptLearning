// call() vs apply() vs bind()
//=============================

//=======================================================
function hello() {
  console.log("this is the hello function");
}
hello(); //this is the hello function
hello.call(); //this is the hello function
//we can use .call() on any function to call that function.
//-===========================================================
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

