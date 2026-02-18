const tinderUser = new Object(); //It is singleton object

console.log(tinderUser);

const tinderUserTwo = {}; //It is not a singleton object

console.log(tinderUserTwo);

tinderUser.id = "abc123";
tinderUser.name = "Preetam Kumawat";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
  email: "Preetam@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Preetam",
      lastname: "Kumawat",
    },
  },
};

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { obj1, obj2 };

console.log(obj3);

const obj4 = Object.assign(obj1, obj2); // can't use it
const obj5 = Object.assign({}, obj1, obj2); //We can use this method 20% time to combine two object value
const obj6 = { ...obj1, ...obj2 }; // It is used 80% time

console.log(obj4);
console.log(obj5);
console.log(obj6);

// How value come from database

const userData = [
  {
    id: 1,
    email: "Preet@gmail.com",
  },
  {
    id: 2,
    email: "Preet@gmail.com",
  },
  {
    id: 3,
    email: "Preet@gmail.com",
  },
  {
    id: 4,
    email: "Preet@gmail.com",
  },
];

console.log(userData[1].id);

console.log(tinderUser);

console.log(Object.keys(tinderUser)); //It return keys in array form
console.log(Object.values(tinderUser)); //It return values in array form
console.log(Object.entries(tinderUser)); //It return key value in sub array form
console.log(tinderUser.hasOwnProperty("isLoggedIn")); //It return value in true or false if the passing key is exist otherwise it return false value
