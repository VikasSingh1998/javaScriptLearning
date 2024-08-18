//another way to clone the array
let a1 = [1, 2, 3, 4];

//1st way to create the clone ⇒ By using the slice()
let a2 = a1.slice();
console.log(a2);//[ 1, 2, 3, 4 ]
console.log(a1 === a2); //false

//2nd way to create the clone ⇒ take an empty array and concat it with the given array.
let a3 = [].concat(a1);//[ 1, 2, 3, 4 ]
console.log(a3);
console.log(a1 === a3); //false

//Another way --> by using the spread operator
let a4 = [...a1]; //it will create the clone of the a1
console.log(a1 === a4); //false
console.log(a4);//[ 1, 2, 3, 4 ]