//array

const myArr = ["preet", 1, 2, 3, 4, true, "Preetam"]; //First type to declare array

const myNames = ["Preetam", "Cheenu", "KumawatPreetam"];

let myArr2 = new Array(1, 4, 8, 6, 5); //Second type to declare array

console.log(myArr[0]);

//Run the below code in console

// const numbers = [1, 2, 5, 8, 6];
// undefined;
// numbers(5)[(1, 2, 5, 8, 6)];

let myArray = [12, 25, 89, 2, 5, 956]; //Declaration of array

console.log(myArray);

myArray.push("Preet"); //By using it we can add element at end of the array

console.log(myArray);

myArray.pop(); //By using it we can remove last element of array

console.log(myArray);

myArray.unshift(100); //Add value from Start of the array

console.log(myArray);

myArray.shift(); //Remove value from Start of the array

console.log(myArray);

console.log(myArray.includes(9)); //By using it we can check a nuimber or value is present in array or not

console.log(myArray.indexOf(19)); //By using it we can check index of a value

const newArr = myArr.join(); //It convert array into string

console.log(myArr);

console.log(newArr);
console.log(typeof newArr);
