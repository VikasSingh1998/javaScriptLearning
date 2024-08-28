console.log(this);
// console.log(window);//use in browser
console.log(globalThis);
//=======================================
if (typeof window !== "undefined") {
  console.log("Running in a browser");
} else if (typeof global !== "undefined") {
  console.log("Running in Node.js");
}
// Use window in browser environments.
// Use global in Node.js environments.
//======================================
