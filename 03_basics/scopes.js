var c = 100;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

//Declaration of all the variable inside if block called block scope and declaration outside the if block called global scope

// console.log(a);
// console.log(b);
console.log(c);

{
} //It is called scope,If it come with if,else,function or loop

//NestedScope

function one() {
  const username = "Preetam";
  function two() {
    const web = "youtube";
    console.log(username);
  }
  // console.log(web);
  two();
}

one();

if (true) {
  const username = "Preet ";
  if (username === "Preet ") {
    const website = "Linkedin";
    console.log(username + website);
  }
  // console.log(website);
}

// console.log(username);

//++++++++++Interesting+++++++++++++++

function addOne(num) {
  return num + 1;
}

addOne(5);

const addtwo = function (num) {
  return num + 2;
};

addtwo(5);
