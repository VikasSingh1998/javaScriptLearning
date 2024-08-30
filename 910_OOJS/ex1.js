// Suppose we have an object wich contian some properties and some method is there.
const user = {
  firstname: "vikas",
  lastname: "singh",
  email: "svikas@gmail.com",
  age: 2,
  address: "siwan rajput",

  about: function () {
    return `${this.firstname} is ${this.age} year old`;
  },
  is18: function () {
    return this.age >= 18;
  },
};
//how to use this object.
const aboutUser = user.about();
console.log(aboutUser); //vikas is 2 year old
//------------------------------------------
/* 
suppose we have to create 1 lakh object. SO how we can create.
we will make a function which will take the value and return the object.
----
What we have to do in that function?
-> We will create and empty objcet.
-> Add the given values(key value).
-> return the object.
//===========================================*/
function createUser(firstname, lastname, email, age, address) {
  //now make the empty object.
  const user = {};
  user.firstname = firstname;
  user.lastname - lastname;
  user.email = email;
  user.age = age;
  user.address = address;
  //we have to add the methods also.
  (user.about = function () {
    return `${this.firstname} is ${this.age} year old`;
  }),
    (user.is18 = function () {
      return this.age >= 18;
    });

  //now after adding all the value to user object, return the object.
  return user;
}

// now we will create the some users.
const user1 = createUser("vikas", "singh", "dfa@gmail.com", 12, "Rajpur");
console.log(user1);
console.log(user1.is18());
/*
{
  firstname: 'vikas',
  email: 'dfa@gmail.com',
  age: 12,
  address: 'Rajpur',
  about: [Function (anonymous)],
  is18: [Function (anonymous)]
}
false
*/
//now suppose we have to create the lots of object, then for all the object these 2 methods will be created.
//this needs losts of space.
//But this 2 method is same for all the object, so keep this 2 method at separate place and use this for all the objcets.
//---------------------
//now see ex2.js
