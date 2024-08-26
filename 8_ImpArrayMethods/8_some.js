/*
some()
=======

*/
//=============================
// 
let arr = [1, 2, 3, 4, 5, 6];
let val = arr.some((val, index, arr) => {
  return val % 2 === 0;
});
console.log(val);//true
//-----------------------------
// 
let words = ["apple", "banana", "cherry", "date"];
let val = words.some((word, index) => {
  return word.length >= 6;
});
console.log(val);
// -----------------------------


