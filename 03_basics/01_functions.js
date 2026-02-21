function sayMyName() {
  console.log("p");
  console.log("r");
  console.log("e");
  console.log("e");
  console.log("t");
  console.log("a");
  console.log("m");
}

//sayMyName //FunctionReferance

sayMyName(); //FunctionExecuation

function addTwoNumbers(number1, number2) {
  //Parameters
  console.log(number1 + number2);
}

addTwoNumbers(3, 3); //Arguments

const result = addTwoNumbers(3, 2);

console.log("Result :", result);

//Second Function

function add(num1, num2) {
  // let result = num1 + num2;
  // return result;
  return num1 + num2;
  console.log("Preetam");
}

const result2 = add(10, 10);
console.log(result2);

//Imp for Interview

function loginUserMessage(userName = "Preet") {
  //Here preet is default value it execuate whene we can't pass any argument 3

  return `${userName} just logged in`;
}

loginUserMessage("Preetam");

console.log(loginUserMessage("Preetam"));

console.log(loginUserMessage(""));
console.log(loginUserMessage());

// functionCalculateCartPrice
