let score = "33";

let valueInNumber = Number(score); //Here Number is class based dataType

// "33" => 33

// "33abc" => NaN

// true => 1; false => 0

let isLogin = 1;

let BoolLogin = Boolean(isLogin);

console.log(BoolLogin);

// 1 => true
// 0 => false;
// " " => false
// "Preetam" => true

let someNumber = 33;

let stringNumber = String(someNumber);

console.log(stringNumber);
console.log(typeof stringNumber);

// **************************** Operations ***********************************

let value = 3;
let negValue = -value;
console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 / 2);
// console.log(2 % 2);
// console.log(2 ** 2);

let str1 = "Hello ";
let str2 = "Preetam";
let str3 = str1 + str2;

console.log(str3);

console.log(1 + "2");
console.log("1" + 2);
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log(((3 + 4) * 5) % 3);
console.log(true);
console.log(+true);
console.log(+"");

console.log("10" - 2);

let strNum = "50.10";
let orgNum = parseInt(strNum);

console.log(orgNum);
