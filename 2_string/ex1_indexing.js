// String Indexing
let name= "vikas";
// index=> 01234
console.log(name[0]);//v
console.log(name[3]);//a
console.log(name[4]);//s
console.log(name[5]);//undefined
console.log(name.length);//5
console.log(name[name.length-1]);//s
//================================================
// Iterate through the string
for(let i=0;i<name.length;i++)
{
    console.log(name[i],end=" ");
}
//this will print each char in different line
// -----------------------------------------
let result ="";//create the empty string to hold the result.
for(let i=0;i<name.length;i++)
{
    result+=name[i]+" ";
}
//now we have to trim the result.
console.log(result);// "v i k a s "
console.log(result.length);//10
console.log(result.trim());//"v i k a s" ==> Using trim() to remove the trailing space
console.log(result.trim().length);//9
console.log(result.length);//10
console.log(result[result.length-1]);//" "  empty space.
//=================================================

