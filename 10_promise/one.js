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
    let error = true;
    if (!error) {
      resolve({ username: "kumawatpreetam", password: 123 });
    } else {
      reject("Error:Something went Wrong");
    }
  }, 1000);
});

promiseFour.then().catch();
