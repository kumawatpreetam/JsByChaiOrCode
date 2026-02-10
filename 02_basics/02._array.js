const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

//IF we push an array inside a array the push array is act as a element of outer element

// console.log(marvel_heros[3][1]); //By using it we can access element of inner array

const allHeros = marvel_heros.concat(dc_heros); //It add element of 2 array in 1 array and create new array
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const my_real_another_array = another_array.flat(Infinity);
console.log(my_real_another_array); //It work same as concat method

console.log(Array.isArray("Preet")); //It return boolean values

console.log(Array.from("Preetam")); //It convert String into Array

console.log(Array.from({ name: "preetam" })); //It can't convert object into array and it return empety array.(Asked in interviews** )

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //It convert element into Array
