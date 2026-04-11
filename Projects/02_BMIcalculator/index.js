const form = document.querySelector("form");
// here this usecase will give you empty
//const height = parseInt(document.querySelector("#weight").value);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value); //By using it we can acces value of height in html Input with the id of height and value is also in Sitring form
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.getElementById("result");
  const weightResult = document.getElementById("weight-result");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
  }

  if (weight <= 18.6) {
    weightResult.innerHTML = `Under Weight`;
  } else if (weight >= 18.6 || weight <= 24.9) {
    weightResult.innerHTML = `Normal Weight`;
  } else if (weight > 24.9) {
    weightResult.innerHTML = `Over Weight`;
  }
});
