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
