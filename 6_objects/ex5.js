/*
How Object.keys() Works
=========================
When you use Object.keys(), it returns an array containing all the keys (property names) of the object you pass to it.
*/
const student ={
    name:"vikas",
    age:22,
    grade:"A",
    id:1001,
};
console.log(Object.keys(student));//[ 'name', 'age', 'grade', 'id' ]
//------------------------------

//we can these keys to fetch the values
for (let key of Object.keys(student)) 
{
    console.log(student[key]);
}
  

