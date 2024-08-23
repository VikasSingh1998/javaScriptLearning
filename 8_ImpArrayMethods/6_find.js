


//-------------------------------------------------------------
//Example 1 ==> find the first even number which is at odd index
let arr = [3, 5, 7, 4, 5];
let val = arr.find((val, index, arr) => {
  console.log(val);
  console.log(index);
  console.log(arr);
  return val % 2 === 0 && index % 2 === 1;
});
console.log(val);
//----------------------------------------------------------
//Example 2 ==> find the first even number which is at odd index
let arr = [3, 5, 7, 4, 5];
let val = arr.find((val, index, arr) => {
  return val % 2 === 0 && index % 2 === 1;
});

console.log(val);//4
//------------------------------------------------------------
// Example 3 ==> Finding an Object by Property
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "Bharlie" },
];
// users.find((val, index, arr) => {
//   console.log(val);//print the value
//   console.log(index);//print the index
//   console.log(arr);//print the object
// });

let user = users.find((val) => {
  return val.id % 2 === 0;
});
console.log(user);//{ id: 2, name: 'Bob' }
//it return the first value which satisfy the condition.
// -------------------------------------------------------------

