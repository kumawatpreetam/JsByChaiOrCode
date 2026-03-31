const titleOne = document.getElementById("titleOne");
const titleTwo = document.getElementsByClassName("titleTwo");

titleOne.style.color = "red";
// titleTwo.style.color = "red"; //It cannot apply because we can add same class on multiple element and it return html collection thats why we need indexing

// titleTwo[0].style.color = "red";

Array.from(titleTwo).forEach((element) => {
  element.innerHTML = "Daksh";
});

const ID = document.getElementById("titleOne").id;
console.log(ID);

const CLASS = document.getElementById("titleOne").className;
console.log(CLASS);
