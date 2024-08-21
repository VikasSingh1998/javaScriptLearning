//object inside array
//very useful in real world applications
const users = [
  { id: 1, name: "vikas1", gender: "male" },
  { id: 2, name: "vikas2", gender: "male" },
  { id: 3, name: "vikas3", gender: "male" },
];
console.log(users);
for (let user of users) {
  console.log(user); //print each object one by one
  console.log(user.id);
  console.log(user.name);
}
