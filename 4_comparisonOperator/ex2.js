// == vs ===
//== ---> only value(content) are compared but not datatype
//===  ---> both data type and value both are compared

let num1 = 10;
let num2 = "10";

console.log(num1 == num2);//true
console.log(num1 === num2);//false
