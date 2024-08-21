let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2, 10, 12];
console.log(arr3); //[1, 2, 3, 4, 5, 6, 10, 12]
//--------------------------------
let a = [..."vikas"];
console.log(a); //['v', 'i', 'k', 'a', 's']
//so we can spread the string by using ...
//we can not spread the number because it is not iterable
// let nums = [...1234];//TypeError: 1234 is not iterable
//---------------------------------
//spread operators in objects
let student = {
  name: "vikas",
  roll: 10,
};
let person = {
  ename: "ravi",
  eroll: 101,
  name: "vikas singh",
};
const newObject = { ...student, ...person, newKey: "value" };
console.log(newObject);
//when we will spread more than one object then key which are duplicate --> there values will be override with the new values
//---------------------------------
let data = { ..."abcdefghijklmnopqrstuvwxyz" };
console.log(data);
//{0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', 5: 'f', 6: 'g', 7: 'h', 8: 'i', 9: 'j', 10: 'k', 11: 'l', 12: 'm', 13: 'n', 14: 'o', 15: 'p', 16: 'q', 17: 'r', 18: 's', 19: 't', 20: 'u', 21: 'v', 22: 'w', 23: 'x', 24: 'y', 25: 'z'}
//===================================
