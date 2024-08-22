/*
7. Async Functions
Introduced in ES8, these functions allow you to write asynchronous code in a synchronous style using async and await.
*/
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}
