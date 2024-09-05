//JS fucntion ==> function + Object
// In JS we can treat function like object also.

function fun() {
  console.log("this is fun method");
}
console.log(fun.name); //add
//we are using the function as objet and name is its property.
//we can add the properties to it

fun.age = 12;
fun.city = "patna";
console.log(fun.age); //12
//so here we are treating this fun as object.
//-------------------------------------------
/*
Funtion provide more useful properties 
name ==> give the function name
-----------------
Function provide us the free space.
FreeSpace ==> ek object hai and we call it prototype.
This is empty object which will be use to hold the k-v pair.
*/
console.log(fun.prototype); //{}

//==================================================
//Only function provides prototype property.
// function val() {
//   console.log("this is function");
// }
//Protype is present

const val = {
  key1: "val1",
};
//Protype is not present
if (val.prototype) {
  console.log("Prototype is present.");
} else {
  console.log("Protype is not present");
}
//================================================
//we can consider this prototype as empty object.
//we can add any properties to it.
console.log(fun.prototype); //{}
fun.prototype.value = 100;
console.log(fun.prototype); //{ value: 100 }
fun.prototype.add = function () {
  return "Funtion is Bind with add";
};
console.log(fun.prototype); //{ value: 100, add: [Function (anonymous)] }
console.log(fun.prototype.add()); //Funtion is Bind with add

//Protype ==> protype is object.

