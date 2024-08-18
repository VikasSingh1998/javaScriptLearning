//use const for creating the array

const val = 10;
// val = 12;//Uncaught TypeError: Assignment to constant variable.
console.log(val);//10


//now lets see the const array
const a = [1, 2, 3];
console.log(a); //[1, 2, 3]
a.push(10);
console.log(a);//[1, 2, 3, 10]
// a = [2, 3]; //03.js:8 Uncaught TypeError: Assignment to constant variable.
console.log(a);//[1, 2, 3, 10]
//---------------NOte--------------------------------------------------------
//for the const array --> we can do any operation in that array
//But we can't assign any new address to that variable.

//Example--> [1,2,3] --> will be stored in the heap at some address
//a will hold the address of the that array
//so we can’t change the address of a
