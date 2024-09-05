//Continue to ex2.js
//Optimization for adding methods in the userMethods
const userMethods = {
  about: function () {
    return `${this.firstname} is ${this.age} year old`;
  },
  is18: function () {
    return this.age >= 18;
  },
};
function createUser(firstname, lastname, email, age, address) {
  //now make the empty object.
  // const user = {};
  const user = Object.create(userMethods); //create the empty object
  //Inside the [[proto]] all the properties and methods will be set.
  //If something is not there in the user objcet, it will check in the userMethods.
  user.firstname = firstname;
  user.lastname - lastname;
  user.email = email;
  user.age = age;
  user.address = address;

  //now after adding all the value to user object, return the object.
  return user;
}

// now we will create the some users.
const user1 = createUser("vikas", "singh", "dfa@gmail.com", 12, "Rajpur");
const user2 = createUser("vikas2", "singh2", "dfa2@gmail.com", 23, "Rajpur2");
console.log(user1);
console.log(user1.is18());
console.log(user1.about());
console.log(user2);
console.log(user2.about());
console.log(user2.is18());

/*
{
  firstname: 'vikas',
  email: 'dfa@gmail.com',
  age: 12,
  address: 'Rajpur'
}
false
vikas is 12 year old
{
  firstname: 'vikas2',
  email: 'dfa2@gmail.com',
  age: 23,
  address: 'Rajpur2'
}
vikas2 is 23 year old
true
*/

