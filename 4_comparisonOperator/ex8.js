//taking the input from the user
let value = 10;
let input = +prompt("Enter a number"); //10
//prompt --> take the input in string
console.log(typeof input, input); //number 10
//we have to change the string to number by adding the +
//let input = +prompt("Enter a number");
//so here input will be number
//===========================================================
if (input === value ) {
  console.log("lottery winner");
} 
else {
  if (input < value ) console.log("to low");
  else console.log("to high");
}
