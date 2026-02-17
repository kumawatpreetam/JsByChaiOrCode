// How to Declare a variable

let myName = "Preetam"; //We can change value inside the let variable
console.log(myName); //By using it we can print anything in console

const ourName = "Preet"; //We can't change value inside the const variable
console.log(ourName);

let age = 21;

let Bool = true;

let sym = Symbol("1");

console.log(
  `My age is ${age} right now and my name is ${myName} so this is all about me and it is also ${Bool} and my symbol is ${sym.toString()}`,
); //String interpolution

console.log(typeof age); //By using Type of we can check type of any variable
console.log(typeof Bool);
console.log(typeof syn);

//TypeConversion fron striong to number same as we convert Boolean and String.

let price = "100";

console.log(typeof price);

let orgPrice = Number(price);

console.log(`${orgPrice + 10} and its type is ${typeof orgPrice}`);
