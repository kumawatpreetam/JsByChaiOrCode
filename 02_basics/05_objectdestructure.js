const course = {
  courseName: "js in hindi",
  price: "999",
  courseInstructor: "Preetam",
  country: "India",
};

// course.courseInstructor;

const { courseInstructor: Instructor } = course;

const { country = "India" } = course;
console.log(course);
// console.log(country);

// console.log(courseInstructor);

// console.log(Instructor);

// const navbar = ({ company }) => {};

// navbar((company = "Preetam"));

//Syntax of API,In what type of formate we can store data

//TypeOne :jison formate

/*
{
    "name" : "Preetam",
    "Coursename" : "js in hindi",
    "price" : "free",
}
*/

//TypeTwo

[{}, {}, {}];

// Tools to Study on APIs are as follow

// JSONformatter

let num = null;

console.log(typeof num);
