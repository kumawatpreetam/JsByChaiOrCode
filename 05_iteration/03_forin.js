const myObj = {
  js: "Javascript",
  cpp: "C++",
  java: "Java",
  rb: "ruby",
};

for (const key in myObj) {
  console.log(key);
}

for (const key in myObj) {
  console.log(myObj[key]);
}

for (const key in myObj) {
  console.log(`${key} is used for ${myObj[key]}`);
}

const programming = ["js", "cpp", "py", "rb", "c"];

for (const key in programming) {
  console.log(key);
}

for (const key in programming) {
  console.log(programming[key]);
}

const imap = new Map();

imap.set("In", "India");
imap.set("USA", "United States of America");
imap.set("Fr", "France");
imap.set("In", "India");

for (const key in imap) {
  console.log(key);
}

//Map is not iterable with for...in loop.
