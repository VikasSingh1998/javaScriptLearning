//how  to iterate the objects
let student = 
{
    name: "vikas",
    roll: 10,
    id: 300,
    city: "patna",
};
//we can iterate the objects by using
//for in loop
//Object.keys
//------------------------------------
for(let key in student)
{
    console.log(key);//it will give the key one by one
}
//--------------------------------------
//to print value we can use these keys
for (let key in student) 
{
    console.log(student.key); //it will give undefined
    //it will search for key --> key
}
//------------------------------------------------
//To print the corresponding value ⇒ use [] notations
for (let key in student) 
{
    console.log(student[key]); //it will print the value of keys
}
//---------------------------------------------
//to print the key value pair
for(let key in student)
{
    console.log(`${key} -> ${student[key]}`);//it will print the key value pair
}
//============================================
