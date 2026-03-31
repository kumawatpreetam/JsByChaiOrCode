const parent = document.querySelector(".parent");

console.log(parent);

console.log(parent.children); //ByUSing it we can access children in console

console.log(parent.children[0]); //ByUSing it we can access first children element

console.log(parent.children[0].innerHTML);

console.log((parent.children[0].style.color = "red")); //Here we can apply css using js
/*
for (let index = 0; index < parent.children.length; index++) {
  console.log(parent.children[index].innerHTML);
}
*/
//Loops are apply on HTML Collection without converting in array

// Array.from(tempList) //It is a way to convert html collection into Array

/*
// Example of Array Convertion

// HTMLCollection => Array

const childArr = Array.from(parent.children);
console.log(childArr);

*/

// console.log(parent.firstElementChild); //It return first element child of the parent element
// console.log(parent.lastElementChild); //It return last element child of the parent element

const dayOne = document.querySelector(".day");

console.log(dayOne);

console.log(dayOne.parentElement); // It return Parent Element of Child Element

console.log(dayOne.nextElementSibling); // It return next Element of first element children

console.log("NODES: ", parent.childNodes);
