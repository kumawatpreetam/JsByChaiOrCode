//Run Whole code in Browser console

console.log(window);

console.log(window.document); //represents the entire HTML page loaded in the browser.

console.dir(document);

console.log(document.baseURI);

console.log(document.links);

console.log(document.links[2]);

document.getElementById("firstHeading");

document.getElementById("firstHeading").innerHTML;

document.getElementById("firstHeading").innerHTML = "<h1>Kumawat Preetam </h1>";

//   document.getElementById("first-heading").id

// 'first-heading'
// document.getElementById("first-heading").class

// undefined
// document.getElementById("first-heading").className

// ''

// document.getElementById("first-heading").getAttribute('id')

// 'first-heading'
// document.getElementById("first-heading").getAttribute('class')

// null

// document.getElementById("first-heading").setAttribute('class','test-1')

// undefined

// document.getElementById("first-heading").setAttribute('class','test-1 heading')

// undefined

// firstHeading.style.backgroundColor = "green";
// ("green");

// DIFFERANCE_BETWEEN_BELOW_THREE_METHOD

// firstHeading.textContent;
// ("\n        DOM Learning on ChaiAurCode\n        test text\n      ");

// firstHeading.innerText;
// ("DOM Learning on ChaiAurCode");

// firstHeading.innerHTML;
// ('\n        DOM Learning on ChaiAurCode\n        <span style="display: none">test text</span>\n      ');

/* QuerieSelectors */

document.querySelector("h2"); //usingTagName

document.querySelector("#firstHeading"); //UsingIdName

document.querySelector(".heading"); //usingClassName

document.querySelector('input[type="password"]');

document.querySelector("p:first-child");

const myul = document.querySelector("ul");

myul.querySelector("li");

const listitem = document.querySelector("li");
listitem.style.backgroundColor = "red";

listitem.innerText;
("one");

listitem.innerText = "Preet";
("Preet");

//Node List and Html collection are not pure array

/*
document.querySelectorAll("li");
NodeList(3) [li, li, li]
const tempList = document.querySelectorAll("li");
undefined
tempList
NodeList(3) [li, li, li]
const arr = [1,2,3];
undefined
arr
(3) [1, 2, 3]0: 11: 22: 3length: 3[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
temp

tempList[0].style.color = "green"
'green'

*/

/*
tempList.forEach((l)=>{
    l.style.color = "red"
})


*/

/*
document.getElementsByClassName("list-item")
HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]
const tempList = document.getElementsByClassName("list-item")
undefined
Array.from(tempList)
(4) [li.list-item, li.list-item, li.list-item, li.list-item]

*/

console.log(document);
