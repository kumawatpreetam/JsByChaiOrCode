// Dates

let MyDate = new Date();

console.log(MyDate);
console.log(MyDate.toString());
console.log(MyDate.toDateString());
console.log(typeof MyDate);

let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toDateString());

let mySecCreatedDate = new Date(2026, 0, 23, 5, 3);
console.log(mySecCreatedDate.toLocaleString());

let myThirdCreatedDate = new Date("2026-01-15");
console.log(myThirdCreatedDate.toLocaleString());

let myForthCreatedDate = new Date("01-15-2026");
console.log(myForthCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);

console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getMonth());
newDate.toLocaleString("default", {
  weekday: "long",
  //   timeZone: "",
});
