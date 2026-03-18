const coding = ["js", "Ruby", "Java", "Python"];

console.log("01");

coding.forEach(function (item) {
  console.log(item); //It automatically pass value as a parameters
});

// callback function cannot have any type of name

console.log("02");

// Using arrow function
coding.forEach((item) => {
  console.log(item);
});

//Using Referancr Function

console.log("03");

function printme(item) {
  console.log(item);
}

coding.forEach(printme);

console.log("Full access type");

coding.forEach((item, index, arr) => {
  console.log(index, item, arr);
});

console.log("ObjType");

const myCoding = [
  {
    languagename: "JavaScript",
    languagefilename: "js",
  },

  {
    languagename: "Python",
    languagefilename: "py",
  },

  {
    languagename: "C++",
    languagefilename: "cpp",
  },
];

myCoding.forEach((item) => {
  console.log(item);
});

myCoding.forEach((item) => {
  console.log(item.languagefilename);
});
