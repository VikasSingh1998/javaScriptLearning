//objects --> objects are reference types similar to array
//objects don't have index
//objects --> key-value pair
const student = { name: "vikas", roll: 22 };
console.log(student); //{name: 'vikas', roll: 22}
console.log(typeof student); //object
//how to access the data form the objects
console.log(student.name); //vikas
console.log(student.roll); //22
console.log(student["name"]); //vikas
//key are string --> by default
//====================================
//value can be array also
const person = {
  name: "vikas",
  age: 22,
  hobbies: ["a", "b", "c"],
};
console.log(person.hobbies); //['a', 'b', 'c']
console.log(person); //{name: 'vikas', age: 22, hobbies: Array(3)}
//======================================
//how to add key value pair to objects
person.gender = "male";
console.log(person); //{name: 'vikas', age: 22, hobbies: Array(3)}
//{name: 'vikas', age: 22, hobbies: Array(3), gender: 'male'}
//we can use bracket also to add k-v pair
person["mobile"] = 9940;
console.log(person); //{name: 'vikas', age: 22, hobbies: Array(3)}
//{name: 'vikas', age: 22, hobbies: Array(3), gender: 'male', mobile: 9940}
//======================================
