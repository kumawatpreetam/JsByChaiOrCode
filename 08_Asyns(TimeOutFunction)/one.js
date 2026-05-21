// setTimeout(() => {
//   console.log("Preetam");
// }, 2000);

// Create Function
const sayName = () => {
  console.log("Preetam");
};
// Add Referance of function in setTimeout Function
setTimeout(sayName, 2000);

// Change Text

const changeText = () => {
  document.querySelector("h1").innerHTML = "Hello Guys";
};

const clearMe = setTimeout(changeText, 3000);

// clearTimeout(clearMe);

const stopBtn = document.getElementById("stop");

stopBtn.addEventListener("click", () => {
  clearTimeout(clearMe);

  console.log("Rukjaa Bhai");
});
