//for loop in the
let a = [1, 2, 3, 4];
console.log(a.length); //4
for (let i = 0; i < a.length; i++) 
{
  console.log(a[i]);//1 2 3 4
}
//-------------------------
let fruits = ["apple", "orange", "grapes"];
let fruits2 = [];
for (let i = 0; i < fruits.length; i++) {
  fruits2.push(fruits[i].toUpperCase());
}
console.log(fruits); //['apple', 'orange', 'grapes']
console.log(fruits2); //['APPLE', 'ORANGE', 'GRAPES']