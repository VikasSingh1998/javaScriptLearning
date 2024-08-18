//undefined 
let name;
console.log(name, typeof name);//undefined undefined
name = "vikas";
console.log(name, typeof name);//vikas string

// const val;//SyntaxError: Missing initializer in const declaration
// we have to give value to const while creating the const.
//============================================
// null
let val = null;
console.log(val);
console.log(typeof null);//onject
//this is but is JS.
// ==============================================
// BigInt
let myNum = 1234;
console.log(myNum);//1234
console.log(Number.MAX_SAFE_INTEGER);//9007199254740991
//Maximum value which can be stored into the Number.
console.log(Number.MIN_SAFE_INTEGER);//-9007199254740991
console.log(Number.MAX_VALUE);// 1.7976931348623157e+308
console.log(Number.MIN_VALUE);// 5e-324
// ----------------------------------------
let num1= BigInt(1234567890987654321);
console.log(num1);

let num2 = BigInt(34232444232323424243234434334324342334);
//write n in the last of the value to make the BigInt
//let val=1234n;
console.log(num2);
// ================================================


