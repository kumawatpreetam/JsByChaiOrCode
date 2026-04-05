function addLanguage(langName) {
  const Li = document.createElement("li");
  Li.innerHTML = `${langName}`;
  document.querySelector(".language").appendChild(Li);
}

addLanguage("Python");
addLanguage("TypeScript");
addLanguage("Css");
addLanguage("Java");

//OptmizedFunction
function addOptiLanguage(langName) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(langName));
  document.querySelector(".language").appendChild(li);
}

//Edit

const secondLang = document.querySelector("li:nth-child(2)");
// secondLang.innerHTML = "Mojo";
const newLi = document.createElement("li");
newLi.textContent = "Mojo";
secondLang.replaceWith(newLi);
addOptiLanguage("GoLanguage");

//edit

const firstLang = document.querySelector("li:first-child");

firstLang.outerHTML = "<li>TyyypeScript</li>";

//Remove

const lastLang = document.querySelector("li:last-child");
lastLang.remove();
