//All the events in js run in sequence

//This is another approach In this approach no any type of issues but it give less features as compare to EventListener
// document.getElementById("owl").onclick = function () {
//   alert("Owl is Clicked");
// };

//This is the Best approach of EventListener
/*const val1 = document.getElementById("owl");
num1.addEventListener("click", function () {
  alert("owl was clciked");
});
*/

const val1 = document.getElementById("owl");
val1.addEventListener(
  "click",
  function (e) {
    console.log(e);
  },
  false,
);

//type,timestamp, defaultPrevented,target,toElement,srcElement,currentTarget,clientX,clientY,screenX,screenY
//altkey,ctrlkey,shiftkey,keyCode

//EventPropogation have two Context Event Bunbbling and Event capturing
