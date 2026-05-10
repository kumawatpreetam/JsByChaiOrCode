//Declaration of Variables
let var1 = 10;
console.log(var1);

let var2 = "Hello";
console.log(var2);

let var3 = 44.22;
console.log(var3);
console.log(`${var3} and its type is ${typeof var3}`);

const name = "Preetam";
console.log(name);
console.log(`${name} and its type is ${typeof name}`);

let names = true;
console.log(names);
console.log(`${names} and its type is ${typeof names}`);

const id = Symbol("123");
// console.log(`${id} and its type is ${typeof id}`); //Give error it cannot convert into string directly

console.log(`${id.toString()} and its type is ${typeof id}`);

//Type Conversion

let str1 = "2" * "2";
console.log(`Sum of Both number is ${str1}`);

let str2 = "2" + "2";
console.log(`Sum of Both number is ${str2}`);

let str3 = "2" - "2";
console.log(`Sum of Both number is ${str3}`);

let str4 = "2" / "2";
console.log(`Sum of Both number is ${str4}`);

let str5 = "2" % "2";
console.log(`Sum of Both number is ${str5}`);

let str6 = "2" % 2;
console.log(`Sum of Both number is ${str6}`);

//String

let st1 = "KumawatPreetam";
console.log(st1.slice(0, 5)); //Slicing
console.log(st1.slice(-5)); //Slicing

let st2 = "PreetPreetamKumawat";

console.log(st2.substring(-1, 5)); //Here -1 is automatically convert and it support positive number

//Objects

let obj1 = {
  name: "Preetam",
  age: 21,
  role: "SDE",
};

console.log(`Name of the person is : ${obj1.name}`);

console.log(`Name of the person is : ${obj1["role"]}`);

const obj2 = {
  1: "Hello",
  2: "Hey",
  3: "Bey",
};

const obj3 = {
  a: "Guys",
  b: "Tata",
  c: "whoooo",
};

const obj4 = {
  true: "Preetam",
  falses: "Kumawat",
  6: "Lets",
};

const obj5 = { ...obj2, ...obj3, ...obj4 }; //It combine all the object according to key DataType

console.log(obj5);
