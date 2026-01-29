// Primitive (Call by value)

// 7 types : String, Number, Boolean null, undefined,Symbol(It is used to create unique any value),BigInt

const score = 100;
const scoreValue = 100.036;

const isLogin = false;
const outsideTemp = null;

let userEmail;

const id = Symbol("123");

const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 34589258888448868n;

//Non Primative(Referace)

//Type of non primative datatype is object and datatype of function is functionobject/function

//Array, Objects, Function

//Js is a dynamic typed languaged

const heros = ["Shaktiman", "naagraj", "Dogga"];

let myObj = {
  name: "Preetam",
  agel: 21,
};

const myFunctiion = function () {
  console.log("Hello world");
};

console.log(typeof myFunctiion);

console.log(typeof bigNumber);

//+++++++++++++++++++++

// Stack (Primitive) [In Stack we work on copy of a variable and other data it give copy],
// Heap (Non-Primitive) [In Heap we work on real variable and other data it give referance]

let myYoutubename = "preetamkumawat";
let anotherName = myYoutubename;
anotherName = "chaiorcode";
console.log(myYoutubename);
console.log(anotherName);

let userOne = {
  email: "preetamkumawat002@gmail.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "kumawatpreet@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);

/*

---------------            ------------------------------
-             -            -                            -
-             -            -                            -
---------------            -                            - 
---------------            -                            -
-             -            -                            -
-             -            -                            -
---------------            ------------------------------
                                     heap
---------------
-             -
-             -
---------------
---------------
-myYoutubename -
-             -
---------------

stack


*/
