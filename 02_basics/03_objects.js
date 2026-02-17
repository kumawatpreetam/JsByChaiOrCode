//Two way to declare object in js
// 1. literal
// 2. Constructor

// If we create object using constructor,It create a sigleton object
//If we create a object using literal sigleton object can't create

//objectLiterals

const sym = Symbol(123);
console.log(typeof sym);
console.log(sym);

const JsUser = {
  name: "Preetam",
  "full name": "Preetam Kumawat",
  age: 20,
  location: "Jaipur",
  email: "preetamkumawat@google.com",
  idLoggrdIn: false,
  latLoginDays: ["Monday", "Wednesday"],
  [sym]: 101,
}; //Type 1 to create a object and this type called object literals

let access1 = JsUser.age;
let access2 = JsUser["email"];
let access3 = JsUser["full name"];
let symaccess = JsUser[sym];

// console.log(access1);
// console.log(access2);
// console.log(access3);
// console.log(symaccess);
// console.log(typeof symaccess);

//declare a symbol

let id = Symbol("id");

//Create Object

let student = {
  name: "Preetam",
  age: 20,
  [id]: 10,
};

// assess symbol

let symbolaccess = student[id];

console.log(symbolaccess);

console.log(typeof symbolaccess);

student.name = "Daksh";

console.log(student.name);
Object.freeze(student); //By using we can freez any object easily,It work like const variable

student.name = "Preetam"; //It can't apply because we freeze it and it can't give any type of error

console.log(JsUser);

console.log(student);

JsUser.greeting = function () {
  console.log("Hello JS user");
};

console.log(JsUser.greeting); //It return function referance

console.log(JsUser.greeting()); //It return function execuation

JsUser.grettingTwo = function () {
  console.log(`Hello Js User, ${this.name}`); // If we referance same object we use this then property name
};

console.log(JsUser.grettingTwo()); //It return function execuation
