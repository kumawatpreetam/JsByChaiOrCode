const user = {
  username: "Preetam", //This the default  value
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} ,welcome to my web`);
    // console.log(this);
  },
};

// user.welcomeMessage();

// user.username = "Preettttt"; //Here we can change value/context

// user.welcomeMessage();

console.log(this);

function chai() {
  console.log(this);
}

chai();

//***************** declare_using_function_keyword **********

// function anotherChai() {
//   let username = "Preet";
//   console.log(this.username);
// }

// anotherChai();

//***************** variable_function **********

// let anotherChai = function () {
//   let username = "Preet";
//   console.log(this.username);
// };

// anotherChai();

//***************** declare_using_arrow **********

let coffee = () => {
  let username = "Preet";
  console.log(this.username);
};

coffee();

const addTwo = (num1, num2) => {
  return num1 + num2; //Explicit return
};
console.log(addTwo(3, 4));

const addThree = (num1, num2) => num1 + num2;
console.log(addThree(3, 4));

const addFour = (num1, num2) => num1 + num2; //This arrow function is used in react / Implicit return
console.log(addFour(3, 4));

const ad = (num1, num2) => {
  user: "Preet"; //Using this way we can pass any type of object
};

console.log(ad());
