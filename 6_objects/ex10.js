//nested destructuring
const users = [
  { id: 1, name: "vikas1", gender: "male" },
  { id: 2, name: "vikas2", gender: "male" },
  { id: 3, name: "vikas3", gender: "male" },
];
const [user1, user2] = users; //here we are getting the whole object
console.log(user1); //{id: 1, name: 'vikas1', gender: 'male'}
console.log(user2); //{id: 2, name: 'vikas2', gender: 'male'}
//suppose if we don't want to whole object we want some value from object then we can destructure like this
const [{ id }, { name }, user3] = users;
console.log(id); //1
console.log(name); //vikas2
console.log(user3); //{id: 3, name: 'vikas3', gender: 'male'}
//while destructuring we can change the name of the variable also
//const [{ id:user1Id }, { name:user2Name }, user3] = users;
