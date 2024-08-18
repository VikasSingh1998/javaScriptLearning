// If the array doesn’t have enough elements, you can provide default values
let [a = 10, b = 20, c = 30] = [1, 2];
console.log(a); // 1
console.log(b); // 2
console.log(c); // 30 (default value)
//==============================================
// Destructuring makes it easy to swap the values of two variables
let x = 5;
let y = 10;

[x, y] = [y, x];

console.log(x); // 10
console.log(y); // 5

