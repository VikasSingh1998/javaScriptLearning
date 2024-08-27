//Iterables ==> Jispe hum "for of" loop laga sakte hai. Ex Array, string.
//-----------------------------
//String is iterable
let name = "vikas";
for (let ch of name) {
  console.log(ch); //v i k a s
}
//---------------------------------
//array is iterable
let arr = [1, 2, 3, 4, 5];
for (let val of arr) {
  console.log(val);
}
//----------------------------------
// Object is not iterable.
const users = {
  vikas: 101,
  ravi: 102,
  prashant: 103,
};
for (let val of users)  //TypeError: users is not iterable
{
  console.log(val);
}
//-----------------------------------
// Array Like Objects
// Jinke pass length property hai and jinko hum index se access kr sakte hai.
// Example: String

let name1 = "vikassingh";
console.log(name1.length); //10
console.log(name1[3]); //a
