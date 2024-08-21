//function Declaration
function fun1() {
  console.log("function body");
}
fun1();//function body
// —---------------------
function add(a, b) {
  return a + b;
}
console.log(add(2, 4));//6
// —---------------------
function find(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return true;
  }
  return false;
}
console.log(find([1, 2, 3, 4, 5], 14));//false
// —------------------------------
//function expression
const funName = function () {
  return "Hello";
};
console.log(funName()); //Hello
// —------------------------------
//arrow function
const funName = () => {
  return "hello...";
};
console.log(funName());
//---------------------------
const add = (num1, num2) => {
  return num1 + num2;
};
console.log(add(4, 5));//9
