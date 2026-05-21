const sayDate = (str) => {
  console.log(str, "Hello Preetam", Date.now());
};

const say = setInterval(sayDate, 1000, "hii");

clearInterval(say);
