//convert form number to string.
let age = 10;
console.log(typeof age);//number
// add empty string "" to the number to convert it to the string
age = age+"";
console.log(typeof age);//string
//====================================
// convert from string to number 
let num = "10";
console.log(typeof num);//string
num = +num;
console.log(typeof num);//number
//=====================================
// we can use typecasting also
let val=10;
console.log(typeof val);//number
val = String(val);
console.log(typeof val);//string
//=====================================
let val1 = "100";
console.log(typeof val1);//string
val1 = Number(val1);
console.log(typeof val1);//number
//======================================

