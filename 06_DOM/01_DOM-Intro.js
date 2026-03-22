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

document.querySelector("h2");

document.querySelector("#firstHeading");

document.querySelector(".heading");

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
