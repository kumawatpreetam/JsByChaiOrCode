// Js Execuation Context

// ------------
//    {}      -
//            -    ----- Global  EC
// ------------                |
//                             |
//                             this

// JavaScript Execution Context is the environment in which JavaScript code runs. It decides how variables, functions, and objects are accessed and executed.

// There are three types of execution context in **JavaScript**:

// 1. **Global Execution Context** – Created when the program starts. It creates a global object (like `window` in browser) and sets `this` keyword.
// 2. **Function Execution Context** – Created whenever a function is called. Each function gets its own separate context.
// 3. **Eval Execution Context** – Created when code runs inside the `eval()` function.

// Execution context works in two phases:

// * Memory creation phase /Creation Phase
// * Code execution phase

// It helps JavaScript manage code step by step.

let val1 = 10;
let val2 = 5;
function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

console.log(`Result One ${result1} `);
console.log(`Result Two ${result2} `);

//Execuation Phase

// 1. Global Execuation

// 2. Memeory Phase\

val1 - undefined;
val2 - undefined;
addNum - defination;

// Call Stack
