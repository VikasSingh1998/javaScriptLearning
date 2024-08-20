//difference between dot and bracket notations
const person = 
{
    name: "vikas",
    age: 22,
    "person id": 1001,
};
console.log(person.name);
console.log(person["person id"]);
// console.log(person.person id);//errror
//if we have to add a key with space--> we can add in string form
//to access such key we will use bracket notations
