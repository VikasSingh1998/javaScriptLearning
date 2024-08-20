//push(value) ==> push the value to the end of the array
//pop() ==> remove and return the last element of the array.

//unshift(val) ==> add value to the start of the array.
//shift() ==> remove and return the front element of the array.
//=================================================================
let array = [1, 2, 3, 4];
console.log(array); //[1, 2, 3, 4]
array.push(5);
console.log(array); //[1, 2, 3, 4, 5]
console.log(array.pop()); //5
console.log(array); //[1, 2, 3, 4]
//------------------------------------
array.unshift(10);
console.log(array); //[10, 1, 2, 3, 4]
console.log(array.shift()); //10
console.log(array); //[1, 2, 3, 4]
//push and pop are faster than shift and unshift
