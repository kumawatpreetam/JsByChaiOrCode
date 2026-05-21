//generate rendom Color

const rendomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// console.log(Math.floor(Math.random() * 16));

// console.log(rendomColor());

// Excess HTML Element

const Start = document.getElementById("start");
const Stop = document.getElementById("stop");

// Define Global Variable

let intervalId;

//working of StartButton

const startChangingColor = () => {
  const changeBgColor = () => {
    document.body.style.backgroundColor = rendomColor();
  };
  if (intervalId == null) {
    intervalId = setInterval(changeBgColor, 1000);
  }
  //   console.log("yh8iujhi8");
};

//working of StopButton

const stopChangingColor = () => {
  clearInterval(intervalId);
  intervalId = null;
  //   console.log("hell");
};

//Add Click Event Listener

Start.addEventListener("click", startChangingColor);
Stop.addEventListener("click", stopChangingColor);
