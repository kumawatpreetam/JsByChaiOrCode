const name = "Preetam"; //Type 1 to diclare string as a variable
const repoCount = 5;

// console.log(name + repoCount + "Value"); // It can't recommanded for mordern js to display data

console.log(`Hello my name is ${name} and  i have ${repoCount} Repo`); //This syntax called string interpollution //This syntax is used in mordern js to display data easily

const gameName = new String("Preetam");
console.log(gameName);

console.log(gameName[0]);
console.log(gameName.__proto__); //By using it we can see prototype methods and properties of a variable and it is useful when we check how many function are apply on a string or not

console.log(gameName.length); //Using it we can find length of a string

console.log(gameName.toUpperCase()); //By using it we can convert whole string in UpperCase

console.log(gameName.toLowerCase()); //By using it we can convert whole string in LowerCase

console.log(gameName.charAt(2)); //By using it we can find character of given index

console.log(gameName.indexOf("p")); //By using it we can find character of given index

const newString = gameName.substring(0, 4); //Last index character can't include in the substring
console.log(newString);

const anotherString = gameName.slice(-7, -4);
console.log(anotherString);

const preetString = "   Preetam   ";
console.log(preetString);
console.log(preetString.trim()); //This method remove white spaces

const url = "https://preetam.com/preet%20kumawat";

console.log(url.replace("%20", "-")); //It replace %20 with -

console.log(url.includes("preet")); //It find it is in string or not
console.log(url.includes("preeeeeeeeeeeeeeeeeee"));
