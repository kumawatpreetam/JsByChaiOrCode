//Immediately Invoked Function Expressions (IIFE)

(function chai() {
  //Named IIFE
  console.log(`DB CONNECTED`);
})();

((name) => {
  //unNamed IIFE
  console.log(`DB CONNECTED TWO By Preetam ${name}`);
})("Preetam");
