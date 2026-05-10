console.log("Hello Today we start practice of the code");

//Function

// Type-1

function add(num1, num2) {
  return num1 + num2;
}

let addValue = add(3, 3);

console.log(`Sum of numbers is ${addValue}`);

//Named IIFE

(function hee() {
  console.log("Hello");
})();

//UnNamed IIFE

let haa = (() => {
  console.log("free");
})();
