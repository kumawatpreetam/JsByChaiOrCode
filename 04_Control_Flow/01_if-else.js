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
