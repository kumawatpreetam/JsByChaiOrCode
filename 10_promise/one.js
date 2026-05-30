//PromiseOne

const promiseOne = new Promise(function (resolve, reject) {
  //Do Async Tasks
  //Database Calls,networkCalls
  setTimeout(function () {
    console.log("Async task is compelete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise Consumed");
});

//PromiseTwo

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

//PromiseThree

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Preetam", emailL: "preetam@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

//PromiseFour

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "kumawatpreetam", password: 123 });
    } else {
      reject("Error:Something went Wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The Promise is either resolved or rejected");
  });

//PromiseFive

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: 123 });
    } else {
      reject("Error:Js went Wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log("response");
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

/*
async function getAllUsers() {
  try {
    const response = await fetch("https://api.github.com/users/kumawatpreetam");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E: ", error);
  }
}

getAllUsers();
*/

fetch("https://api.github.com/users/kumawatpreetam")
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data))

  .catch((error) => console.log(error));
