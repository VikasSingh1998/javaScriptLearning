//create the clone of the array and add some extra element.
let a1 = [1, 2, 3, 4];
///---------------------------------------------
let a2 = a1.slice().concat(["vikas","ravi","prashant"]);
console.log(a2);//[ 1, 2, 3, 4, 'vikas', 'ravi', 'prashant' ]
//-----------------------------------------------
let a3 = [].concat(a1,["vikas","singh"]);
console.log(a3);//[ 1, 2, 3, 4, 'vikas', 'singh' ]
//-------------------------------------------------
//Another way --> by using the spread operator
let a4 = [...a1, "name", "roll", null]; //it will create the clone of the a1 and add the given extra element.
console.log(a4); //[1, 2, 3, 4, 'name', 'roll', null]
//-----------------------------------
//we can use spread operator for any number of array
let a5 = [...a1, ...a2, ...a3];
console.log(a5);
//[1, 2, 3, 4, 1, 2, 3, 4, 'vikas', 'singh', 1, 2, 3, 4, 5, 6]


