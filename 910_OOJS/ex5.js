/*
Jub Hum function create karte hai, tab function hume ek extra sapce deta hai, Prototype jo ek object hota hai.
Isme hum function se realted k-v pair sotre karte hai.
 */
//In previous example we were using separate method to add function and then store the reference of it in function while creating the object.
//============================================================================
//Don't create the separate method.==> add these methods into the prototype.
// const userMethods = {
//   about: function () {
//     return `${this.firstname} is ${this.age} year old`;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
// };
function createUser(firstname, lastname, email, age, address) {
  //we have to set all the function in the prototype.
  const user = Object.create(createUser.prototype); //create the empty object
  //Jab JS ko koi chiz user object me nhi milega => we createuser.prototype me dekhega.
  user.firstname = firstname;
  user.lastname - lastname;
  user.email = email;
  user.age = age;
  user.address = address;

  //now after adding all the value to user object, return the object.
  return user;
}
//now add the method into the prototype
createUser.prototype.about = function () {
  return `${this.firstname} is ${this.age} year old`;
};

createUser.prototype.is18 = function () {
  return this.age >= 18;
};

// now we will create the some users.
const user1 = createUser("vikas", "singh", "dfa@gmail.com", 12, "Rajpur");
const user2 = createUser("vikas2", "singh2", "dfa2@gmail.com", 23, "Rajpur2");
console.log(user1);
console.log(user2);
console.log(user2.about());
/*
createUser {
  firstname: 'vikas',
  email: 'dfa@gmail.com',
  age: 12,
  address: 'Rajpur'
}
createUser {
  firstname: 'vikas2',
  email: 'dfa2@gmail.com',
  age: 23,
  address: 'Rajpur2'
}
vikas2 is 23 year old
 */
//Prototype ==> ek object hai
//Proto ==> ek reference hai jo humne chain create kiya hai.
// const user = Object.create(createUser.prototype);

