// if

const isUserLoggedIn = true;
if (3 != 2) {
  console.log("Execuated");
}

// 2 === "2"
//

//<, >, <=, >=, ==, !=, === !==

const score = 200;

if (score > 100) {
  const power = "fly";
  console.log(`User Power : ${power}`);
}

const balance = 1000;

//This the example of implicit scope
// if (balance > 500) console.log("test"); //Can't do this in real codebase

const userLogin = true;
const debitCard = true;
const loggedInFromGoogle = false;

if (userLogin && debitCard) {
  console.log("Allow to buy Course");
}

const month = 3;

switch (month) {
  case 1:
    console.log("This is January Month");

    break;
  case 2:
    console.log("This is Febraury Month");

    break;

  case 3:
    console.log("This is March Month");

    break;

  case 4:
    console.log("This is April Month");

    break;

  default:
    console.log("Enter Valid Month number");

    break;
}
