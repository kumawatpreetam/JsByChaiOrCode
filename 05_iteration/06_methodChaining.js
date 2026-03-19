const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumbers.map((num) => num + 10);

// console.log(newNums);

//Chaining Method

const newNums = myNumbers
  .map((num) => num * 10) //firstMapAnswer => [10,20,30,40,50,60,70,80,90,100] => firstChain
  .map((num) => num + 1) //secondMapAnswer => [11,21,,31,,41,51,61,71,81,91,101] => secondChain
  .filter((num) => num >= 40); //thirdFilterAnswer => [41,51,61,71,81,91,101] => thirdChain

console.log(newNums);
