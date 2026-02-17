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
