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
/*
// Why Objects are used in JS
================================
1. Data Structuring: 
Objects allow you to group related data together. For example, if you want to represent a person 
with their name, age, and address, you can use an object to keep all these properties in one place.
    const person = {
    name: "John Doe",
    age: 30,
    address: "123 Main St"
};     

2. Key-Value Pairs: Objects store data as key-value pairs, making it easy to retrieve values using their keys.
console.log(person.name);  // Outputs: John Doe

3. Dynamic Properties: You can add, modify, or delete properties dynamically.

4. Methods: 
Objects can contain functions, known as methods, which can operate on the data within the object. 
This encapsulation of data and behavior makes objects a fundamental part of object-oriented programming (OOP).

const student ={
    name:"vikas",
    info:function(){
      console.log(`Good morning : ${this.name}`);
    }
};
student.info();//Good morning : vikas

*/
