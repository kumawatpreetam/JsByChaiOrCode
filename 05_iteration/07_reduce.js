const myNums = [1, 2, 3];

const myTotal = myNums.reduce(function (acc, currval) {
  console.log(`acc: ${acc} and currval:${currval}`);

  return acc + currval;
}, 0);

// const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

console.log(myTotal);

const shoppingCart = [
  {
    itemName: "jsCourse",
    price: 999,
  },
  {
    itemName: "pyCourse",
    price: 599,
  },
  {
    itemName: "c++Course",
    price: 399,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "HtmlCourse",
    price: 1599,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);
