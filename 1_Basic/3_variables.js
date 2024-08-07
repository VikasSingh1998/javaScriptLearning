// rules for naming the variables
// ====================================
// Don't start with the number
// Only _ and $ are allowed.
// ====================================
// var ==> variable name can be duplicate. 
// let ==> variable name can't be duplicated.
// const ==> value can't br changed.
// ========================================
var roll = 5;
console.log(roll);//5
var roll = 10;
console.log(roll);//10
//So by using the "var" ==> we can crate the variables with the same name.
// ===========================================
let name="vikas";
console.log(name);//vikas
// let name="ravi";// SyntaxError: Identifier 'name' has already been declared
// console.log(name);

// So, by using the "let" ==> we can't create the duplicate variables.
// =============================================
const pi = 3.14;
// pi = 3.5; ==> TypeError: Assignment to constant variable.
console.log(pi);
//==============================================


