/*
6. Generator Functions
=========================
These functions use the function* syntax and the yield keyword to pause and resume execution, 
allowing you to generate a series of values on demand.

A generator function uses the yield keyword to generate values, pausing execution and sending values to the caller. 
It retains the state to resume execution after yield, continuing immediately after the last yield run.

Generator-Object : 
Generator functions return a generator object. Generator objects are used either by calling the 
next method on the generator object or using the generator object in a “for of” loop. 
The Generator object is returned by a generating function and it conforms to both the iterable protocol 
and the iterator protocol.
*/
//====================================================================================
// Example 1: In this example, we will see the creation of basic generator object.
// Generate Function generates three different numbers in three calls.

function* fun() 
{
    yield 10;
    yield 20;
    yield 30;
}
// Calling the Generate Function
let gen = fun();
console.log(gen.next().value);//10
console.log(gen.next().value);//20
console.log(gen.next().value);//30
console.log(gen.next().value);//undefined
//========================================================================================
//Example 2: This example code prints infinite series of natural numbers using a simple generator.

function* generateNextNaturalNumber()
{
  let num=1;
  //// Infinite Generation
  while(true)
  {
    yield num++;
  }
}

let gen = generateNextNaturalNumber();
console.log(gen.next().value);//1
console.log(gen.next().value);//2

//now generate the next 10 natural number.
for(let i=0;i<10;i++)
{
  console.log(gen.next().value);// 3 4. ... 12 
}
//==========================================================
//Example 3: This example of how to manually return from a generator. 
let array = ['a', 'b', 'c'];

function* generator(arr) 
{
    let i = 0;
    while (i < arr.length) 
    {
        yield arr[i++];
    }
}

// Create a generator instance
const gen = generator(array);

// console.log(gen.next().value); // a
console.log(gen.next()); // { value: 'a', done: false }
console.log(gen.next().value); // b
console.log(gen.next()); // { value: 'c', done: false }
console.log(gen.next().value); // undefined
console.log(gen.next()); // { value: undefined, done: true }

// Manually return from the generator
console.log(gen.return('Stopped early').value); // Outputs: 'Stopped early'

// Further calls to next will return done: true
console.log(gen.next()); // { value: undefined, done: true }
console.log(gen.next().value); // Outputs: undefined
console.log(gen.next().value); // Outputs: undefined

/*
Explanation:
==============
Generator Function: generator is a generator function that yields values from an array.
it.next(): Advances the generator to the next yield statement, returning the yielded value.
it.return(value): Ends the generator immediately, returning the specified value ('Stopped early' in this case). 
Subsequent calls to next() will return { value: undefined, done: true }.

Encountering yield and yield*
==============================
yield: Used within a generator to pause execution and return a value. The generator can be resumed from where it was paused.
yield*: Delegates to another generator or iterable, yielding each value from the delegated generator or iterable.

Ex: Example of yield*
---------------------
function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}

function* letters() {
  yield 'a';
  yield 'b';
  yield 'c';
}

function* combined() {
  yield* numbers();
  yield* letters();
}

const combinedGenerator = combined();
console.log(combinedGenerator.next().value); // Outputs: 1
console.log(combinedGenerator.next().value); // Outputs: 2
console.log(combinedGenerator.next().value); // Outputs: 3
console.log(combinedGenerator.next().value); // Outputs: 'a'
console.log(combinedGenerator.next().value); // Outputs: 'b'
console.log(combinedGenerator.next().value); // Outputs: 'c'
console.log(combinedGenerator.next().value); // Outputs: undefined (done: true)
*/
//===============================================================================================
// Example 4
//===========
const arr = ['a', 'b', 'c'];

function* generator() {
    yield 1;
    yield* arr;
    yield 2;
}

for (let value of generator()) 
{
    console.log(value);// 1 a b c 2
}
//=========================================
// Example 5: Return from a generator function.

function* generator() {
    yield 'a';
    return 'result';
    yield 'b';
}

let it = generator();
console.log(JSON.stringify(it.next()));
// {value: "a", done: false}
console.log(JSON.stringify(it.next()));
// {value: "result", done: true}
//========================================
// Example 6:How to throw an exception from the generator.
function* generator() {
    throw new Error('Error Occurred');
}
const it = generator();
it.next(); // Uncaught Error: Error Occurred
/*
Detailed Breakdown:
--------------------
Generator Function: The generator function is defined to immediately throw an error when it starts executing. 
This is not a typical use case, but it illustrates how generators handle exceptions.

Creating the Iterator: When you call generator(), it returns an iterator object.

Calling next(): The first call to it.next() tries to execute the generator function. 
Since the generator function throws an error immediately, this causes an uncaught exception.
*/
//==============================================================================
//Example 7: Calling a generator from another generator.
function* firstGenerator() {
    yield 2;
    yield 3;
}

function* secondGenerator() {
    yield 1;
    yield* firstGenerator();
    yield 4;
}


for (let value of secondGenerator()) 
{
    console.log(value);//1 2 3 4
}
//====================================================================
//Example 8: Using async generators (for api call)

const firstPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(1), 5000); // Resolves after 5 seconds
  });
};

const secondPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(2), 3000); // Resolves after 3 seconds
  });
};

async function* generator() {
  const firstPromiseResult = await firstPromise();
  yield firstPromiseResult; // Yields 1 after 5 seconds
  const secondPromiseResult = await secondPromise();
  yield secondPromiseResult; // Yields 2 after 3 seconds
}

(async () => {
  let it = generator();
  for await (let value of it) {
    console.log(value); // Should log 1 and then 2
  }
})();
//=====================================================================
/*
async function* generator(): Defines an asynchronous generator function.
await firstPromise(): Waits for firstPromise to resolve (takes 5 seconds). After it resolves, firstPromiseResult is yielded.
yield firstPromiseResult: Yields the resolved value (1) from firstPromise.
await secondPromise(): Waits for secondPromise to resolve (takes 3 seconds). After it resolves, secondPromiseResult is yielded.
yield secondPromiseResult: Yields the resolved value (2) from secondPromise.
---------------------------
let it = generator();: Creates an instance of the asynchronous generator. At this point, the generator is set up but not yet executed.
for await (let value of it): Iterates over the values yielded by the asynchronous generator. It automatically handles promises and waits for each value to be available.
console.log(value);: Logs each value yielded by the generator.
*/
//====================================================================


//====================================================================
/*
JavaScript Function Generator – FAQs
================================================
What is a Generator Function in JavaScript?
--------------------------------------------
A generator function is a special type of function that can pause its execution and resume later. 
They are defined using the function* syntax and use the yield keyword to yield values.

How do you create a Generator Function?
---------------------------------------
You create a generator function by adding an asterisk (*) after the function keyword and using the yield keyword to yield values.

How do Generator Functions work?
--------------------------------
Generator functions return a generator object when called. 
This generator object has methods like next(), return(), and throw(). 
The next() method is used to resume the generator function’s execution and retrieve the next value.

How do you use the yield keyword?
-----------------------------------
The yield keyword is used to pause the execution of a generator function and return a value. 
When the generator’s next() method is called, the function resumes execution from where it left off, just after the yield statement.

How do you iterate over values from a Generator?
----------------------------------------------------
You can iterate over values from a generator using a for…of loop or the generator’s next() method.
*/
//






































