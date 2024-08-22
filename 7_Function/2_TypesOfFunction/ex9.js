/*
9. Callback Functions
Functions passed as arguments to other functions, often used in asynchronous operations.
*/
function fetchData(callback) {
  setTimeout(() => {
    callback("Data fetched!");
  }, 1000);
}
