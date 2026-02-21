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

//DayTowCode

console.log("DayTwoCode");

function calculateCartPrice(...num1) {
  return num1;
}

console.log(calculateCartPrice(2, 4, 8, 6));

//SecondFunction.....

function calculateAnother(val1, val2, ...num1) {
  return num1;
}

console.log(calculateAnother(100, 200, 300, 400));

//How to pass object in a function

const user = {
  username: "Preetam",
  price: 199,
};

function handelObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`,
  );
}

handelObject(user);

//Parameters name and Arguments name are differant

//How to pass Array in a function

const myNewArray = [200, 300, 500, 900];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray));
