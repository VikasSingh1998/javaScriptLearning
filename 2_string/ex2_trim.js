/*
//trim()--> In JavaScript, the trim() method is a built-in function for strings. 
It is used to remove whitespace (spaces, tabs, and newlines) from both ends of a string. 
White Space includes any whitespace character, such as space, tab, or newline.

//trim()--> does not modify the original string, make new copy
*/
let name = "     vikas     singh      ";
console.log(name);//"     vikas     singh      "
console.log(name.trim())//"vikas     singh"
console.log(name[0]);//" " empty space.

//=================================================
//Keep in mind that trim() does not modify the original string; instead, 
//it returns a new string with the leading and trailing whitespace removed.

//If you want to modify the original string in place, you can do something like:
name = name.trim();
console.log(name);//vikas     singh
console.log(name[0]);//v
// ================================================
