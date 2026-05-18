//All the events in js run in sequence

//This is another approach In this approach no any type of issues but it give less features as compare to EventListener
// document.getElementById("owl").onclick = function () {
//   alert("Owl is Clicked");
// };

//This is the Best approach of EventListener

/*const val1 = document.getElementById("owl");
val1.addEventListener("click", function () {
  alert("owl was clciked");
});*/

/*const val1 = document.getElementById("owl");
val1.addEventListener(
  "click",
  function (e) {
    console.log(e);
  },
  false,
);
*/
//type,timestamp, defaultPrevented,target,toElement,srcElement,currentTarget,clientX,clientY,screenX,screenY
//altkey,ctrlkey,shiftkey,keyCode

//EventPropogation have two Context Event Bunbbling and Event capturing

const imgClick = document.getElementById("images");
const owlClick = document.getElementById("owl");

/*imgClick.addEventListener(
  "click",
  (e) => {
    console.log("click inside the ul");
  },
  false,
);

owlClick.addEventListener(
  "click",
  (e) => {
    console.log("OwlClicked");
    e.stopPropagation();
  },
  false,
);
*/
/*
imgClick.addEventListener(
  "click",
  (e) => {
    console.log("click inside the ul");
  },
  true,
);

owlClick.addEventListener(
  "click",
  (e) => {
    console.log("OwlClicked");
  },
  true,
);
*/

const google = document.getElementById("google");

google.addEventListener(
  "click",
  function (e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("Google was clicked");
  },
  false,
);

//e.target
//e.target.parentNode

/*
document.querySelector("#images").addEventListener("click", function (e) {
  console.log(e.target.parentNode);
  let removeIt = e.target.parentNode;
  removeIt.remove();
  // removeIt.parentNode.removeChild(removeIt);
});

*/

document.querySelector("#images").addEventListener("click", function (e) {
  console.log(e.target.tagName);
  if (e.target.tagName === "IMG") {
    console.log(e.target.id);

    let removeIt = e.target.parentNode;
    removeIt.remove();
  }

  // removeIt.parentNode.removeChild(removeIt);
});
