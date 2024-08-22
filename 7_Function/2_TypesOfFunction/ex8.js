/*
8. Recursive Functions
Functions that call themselves to solve problems that can be broken down into smaller, repetitive tasks.
*/
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
