const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.8966;

console.log(otherNumber.toPrecision(3)); //Range of it is between 1-21 only //It return string type values

const hundreds = 1000000;
console.log(hundreds);
console.log(hundreds.toLocaleString()); //using it we can divide the digits in commas in us standard
console.log(hundreds.toLocaleString("en-IN")); //using it we can divide the digits in commas in Indian standard

//++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++++++++++++++

console.log("++++++++++++++++++++++++ Maths +++++++++++++++++++++++++");

console.log(Math);

console.log(Math.abs(-2)); //It convert only neg value in positive only

console.log(Math.abs(4));

console.log(Math.round(4.6)); // It choose value according to pointed value(If value after point is lower than 5 rounded function choose lowest value and if value after point is higher than 5 rounded function choose heigh value)

console.log(Math.ceil(4.2)); //It choose always high value

console.log(Math.floor(4.9)); //It choose always lower value

console.log(Math.min(4, 5, 9, 6, 2, 3)); //It return minimum value

console.log(Math.max(4, 5, 9, 6, 2, 3)); //It return maximum value

console.log(Math.random()); //It return random value between 0 and 1

console.log(Math.random() * 10 + 1);

console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.random() * (max - min + 1));

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
