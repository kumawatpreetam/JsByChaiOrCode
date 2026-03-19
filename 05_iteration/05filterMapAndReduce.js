const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach((item) => {
  console.log(item);
  return item;
});

console.log(values);

//forEach Loop cannot return anything

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// fiter return values

// const newNums = myNum.filter((num) => num > 4); //Here values are return automatically

// console.log(newNums);

const newNums = myNum.filter((num) => {
  return num > 4;
}); // If we add scope we can use return keyword to return values

console.log(newNums);

console.log("Using if-else method");

const newArr = [];

myNum.forEach((num) => {
  if (num > 4) {
    newArr.push(num);
  }
});

console.log(newArr);

const books = [
  {
    title: "Book One",
    genre: "Fiction",
    publish: 1981,
    edition: 2004,
  },
  {
    title: "Book Two",
    genre: "Non-Fiction",
    publish: 1992,
    edition: 2008,
  },
  {
    title: "Book Three",
    genre: "History",
    publish: 1999,
    edition: 2007,
  },
  {
    title: "Book Four",
    genre: "Science",
    publish: 2009,
    edition: 2007,
  },
  {
    title: "Book Five",
    genre: "Fiction",
    publish: 2010,
    edition: 2020,
  },
  {
    title: "Book Six",
    genre: "Science",
    publish: 2015,
    edition: 2021,
  },
  {
    title: "Book Seven",
    genre: "CS",
    publish: 2016,
    edition: 2021,
  },
  {
    title: "Book Eight",
    genre: "CSS",
    publish: 2006,
    edition: 2025,
  },
];
/*
const userBooks = books.filter((bk) => {
  return bk.genre === "Fiction";
});
console.log(userBooks);
*/
const userBooks = books.filter((bk) => {
  return bk.publish >= 2000;
});

console.log(userBooks);
