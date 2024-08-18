//for of looP -->  give the value of the array
let numbers = [10, 20, 30];
for(let number of numbers)
{
    console.log(number);//10 20 30
}
//-----------------------------------------------
//for in loop --> GIVE THE INDEX of the array
for (let index in numbers) 
{
    console.log(index); //0 1 2
}
//-----------------------------------------------
//by using this index we can access the value
for (let index in numbers) 
{
    console.log(numbers[index]); //10 20 30
}
//-----------------------------------------------