//we can keep all these methods in a object.
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
  const user = {};
  user.firstname = firstname;
  user.lastname - lastname;
  user.email = email;
  user.age = age;
  user.address = address;
  //we will keep the mothods in the separate object.
  //we can use the reference of that function
  user.about = userMethods.about;
  user.is18 = userMethods.is18;
  //Here we are just storing the reference of the method.

  //now after adding all the value to user object, return the object.
  return user;
}

// now we will create the some users.
const user1 = createUser("vikas", "singh", "dfa@gmail.com", 12, "Rajpur");
const user2 = createUser("vikas2", "singh2", "dfa2@gmail.com", 23, "Rajpur2");
console.log(user1);
console.log(user1.is18());
console.log(user2);
console.log(user2.is18());
/*
{
  firstname: 'vikas',
  email: 'dfa@gmail.com',
  age: 12,
  address: 'Rajpur',
  about: [Function: about],
  is18: [Function: is18]
}
false
{
  firstname: 'vikas2',
  email: 'dfa2@gmail.com',
  age: 23,
  address: 'Rajpur2',
  about: [Function: about],
  is18: [Function: is18]
}
true
*/
/*
Now there is some problem in the approach.
Suppose we have to add some methods in this userMethods object.
Then for each added functions, we have to store the reference of that function in the createUser function.
==============================
Before going to this we have to see one concept.
*/
const obj1 = {
  key1: "value1",
  key2: "value2",
};
const obj2 = {
  key3: "value3",
};
console.log(obj1.key1); //value1
console.log(obj2.key3); //value3
console.log(obj2.key1); //undefined

//Here I want that if key1 is not there in obj2 then it should go in obj1 and take the key1 form there.

//For this create the empty object and pass the objcet which you have to access wehn key is not found.
const obj3 = Object.create(obj1);
obj3.key4 = "value4";
console.log(obj3.key4); //value4
console.log(obj3.key1); //value1
//first it will check in the obj3 if not found the it will go to obj1
console.log(obj3); //{ key4: 'value4' }
//IN the [[proto]] it holds the Object which will caontian the information of the obj1
// __proto__ or [[proto]] both are same.
console.log(obj3.__proto__); //{ key1: 'value1', key2: 'value2' }

