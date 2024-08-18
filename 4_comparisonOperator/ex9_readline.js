/*
The prompt function is typically used in web browsers to get input from the user through a dialog box. 
However, Node.js is a server-side runtime environment and does not have built-in support for browser-specific functions like prompt.

To get user input in Node.js, you can use the readline module. 
*/
//===========================================
//import the readline module
const readline = require('readline');
// require('readline'): This line imports the readline module, which is a built-in Node.js module. 
// It helps you interact with the user by reading input from the terminal (where your script is running).

//create the readline Interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
/*
readline.createInterface(...): This function sets up a way to read input and output text.
input: process.stdin: This tells the program to get input from the terminal (standard input).
output: process.stdout: This tells the program to display output to the terminal (standard output).
*/

//Ask the user for input
rl.question('Enter a number: ', (input) => {
    let number = +input; // Convert the input to a number
    console.log(`You entered: ${number}`);
    // You can add more logic here, such as comparisons or other operations.
    
    rl.close(); // Close the readline interface
});
/*
rl.question('Enter a number: ', ...): This asks the user a question ("Enter a number:") and waits for them to type something.

(input) => {...}: This part is a function that gets called once the user types something and presses Enter. Whatever the user types is passed into the function as the input variable.
let number = +input;: This line converts the input (which is a string) into a number by using the + operator. For example, if the user types "5", this converts it to the number 5.

console.log(...): This prints the message "You entered: " followed by the number the user typed.

rl.close();: Finally, this closes the readline interface, meaning the program stops listening for more input and can exit.
 */