//Popular Public APIS Link

// https://api.github.com/users/kumawatpreetam

// https://randomuser.me/

//https://jsonformatter.org/   => Best Website to Convert API Code into readable formate

const requestUrl = "https://api.github.com/users/kumawatpreetam";
const xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);
// console.log(xhr.readyState);
xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);
    console.log(typeof data);

    console.log(data.name);
    console.log(data.followers);
  }
};

xhr.send();
