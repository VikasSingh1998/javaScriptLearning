//and(&&) 
//or(||)

let val1=3;
let val2=3;
if(val1>=5 && val2>=5)
{
    console.log("Both value is >= 5");
}
else if(val1>=5)
{
    console.log("Only val1 is >= 5");
}
else if(val2>=5)
{
    console.log("Only val2 is >= 5");
}
else
{
    console.log("Both va1 and val2 are less than 5");
}