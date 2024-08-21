// object destructuring
const student = {
  name: "vikas",
  roll: 12,
};
const val1 = student.name;
const val2 = student.roll;
console.log(val1, " ", val2); //vikas   12
//but we have shortcut to do this
//we can do destructuring
const { name, roll } = student;
console.log(name); //vikas
console.log(roll); //12
//so here name and roll are 2 variable and its value will be assigned form the student object
//but here we have to keep the name of the variable similar to key object
//but if we want to change the variable name we can do like this
const { name: nameval } = student;
console.log(nameval); //vikas
//------------------------------------
let { name: var1, ...restval } = student;
//here name will be assigned to var1
//remaining value will be assigned to restval as object
console.log(var1);//vikas
console.log(restval);//{roll: 12}
//=====================================
