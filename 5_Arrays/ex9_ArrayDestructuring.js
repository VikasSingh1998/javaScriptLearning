//Array destructuring ==> to extract values from an array into individual variables.

const arr = [1, 2, 3];
let val1 = arr[0];
let val2 = arr[1];
console.log("val1 is", val1, "val2 is", val2);

//we have better method to do this
let [value1, value2, value3, value4] = arr;
//here value1 and value2 will behave like 2 normal variable
//arr 1st value will be in value1
//arr 2nd value will be in value2
//arr 3rd value will be in value3
//and remaining value in the array will don't have any effect
//if arr have 3 element and we have used 4 variable then 4th variable will be undefined
console.log(value1); //1
console.log(value2); //2
console.log(value3); //3
console.log(value4); //indefined
//===============================
// You can skip certain elements in the array by leaving the corresponding position empty
//we can skip the value of array also ==>[val1, ,val2]
let [v1,,v3] = arr;
console.log(v1);//1
console.log(v3);//3
//===============================
let arr1 = [1,2,3,4,5]
let [a, b, ...newArr] = arr1;
//1 and 2 will be assigned to val1 and val2
//remaining element will be assigned to new array
console.log(a); //1
console.log(b); //2
console.log(newArr); //[3,4,5]















