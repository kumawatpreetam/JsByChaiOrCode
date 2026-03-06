const userEmail = "preetam.ai";

if (userEmail) {
  console.log("Got User Email");
} else {
  console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy value

// "0", 'false' " " , [], {}, function(){}

if (userEmail.length === 0) {
  console.log("Array is Empty");
}

const Obj = {};

if (Object.keys(Obj).length === 0) {
  console.log("Object is empty");
}

let num1 = false == 0;
console.log(num1);

let num2 = false == "";
console.log(num2);

let num3 = "" == 0;
console.log(num3);

//Nullish Coalescing Operator (??): null undefined

//It check the sefty of null value

let val1;

val1 = 5 ?? 20;

console.log(val1);

let val2 = null ?? 10;

let val3 = undefined ?? 15;
console.log(val3);

let val4 = null ?? 18 ?? 20;
console.log(val4);

//Terniary Operator

//condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
