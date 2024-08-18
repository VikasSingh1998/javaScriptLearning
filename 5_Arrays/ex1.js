//Array --> ordered collections of items
//we can store heterogeneous elements in array
let num = [1, 2, 3, 4, 5];
let names = ["vikas", "mohan", "john"];
let mixed = [1, 2.3, "vikas", null, undefined];
console.log(num); //[1, 2, 3, 4, 5]
console.log(names[0]); //vikas
console.log(mixed); //[1, 2.3, 'vikas', null, undefined]
names[2] = "ravi"; //array are mutable
console.log(names); //['vikas', 'mohan', 'ravi']

//to print all the names of the array
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
