//for loop
for (let i = 0; i < 10; i++) 
{
    console.log(i);
}
//---------------------------------
//If you want to print the numbers in the same line using JavaScript, you can concatenate them in a string and then log the entire string after the loop.
let result = "";
for (let i = 0; i < 10; i++) 
{
    result += i + " ";
}
console.log(result.trim()); //0 1 2 3 4 5 6 7 8 9
// Use trim() to remove the trailing space

//—-------------------------------
let sum = 0;
for (let i = 1; i <= 100; i++)
{
    sum += i;
}
console.log(sum);//5050
//================================
//break and continue
//do while etc are similar
  