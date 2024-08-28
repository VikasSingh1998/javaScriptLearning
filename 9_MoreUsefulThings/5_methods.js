//Methods ==> function inside the object.
//===============================================
const person = {
  name: "vikas",
  age: 28,
  about: function () {
    console.log(this);
    console.log(`Person name is ${this.name} and age is ${this.age}`); //this is the current object
  },
};
console.log(person.name); //vikas
console.log(person.age); //28
console.log(person.about); //[Function: about]

person.about();
// { name: 'vikas', age: 28, about: [Function: about] }
// Person name is vikas and age is 28
console.log(person.about());
// { name: 'vikas', age: 28, about: [Function: about] }
// Person name is vikas and age is 28
// undefined
//====================================================
function studentInfo() {
  console.log(this); //this will print the currnt object which call it
  console.log(`Student name is ${this.name} and age is ${this.age}`);
}

const student1 = {
  name: "vikas",
  age: 22,
  about: studentInfo,
};
const student2 = {
  name: "ravi",
  age: 21,
  about: studentInfo,
};
const student3 = {
  name: "ram",
  age: 27,
  about: studentInfo,
};
student1.about();
student2.about();
student3.about();
/*
{ name: 'vikas', age: 22, about: [Function: studentInfo] }
Student name is vikas and age is 22
{ name: 'ravi', age: 21, about: [Function: studentInfo] }
Student name is ravi and age is 21
{ name: 'ram', age: 27, about: [Function: studentInfo] }
Student name is ram and age is 27
*/
