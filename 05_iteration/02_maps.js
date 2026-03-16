//Maps : It store unique values always and it can not store duplicate values

const imap = new Map();

imap.set("In", "India");
imap.set("USA", "United States of America");
imap.set("Fr", "France");
imap.set("In", "India");

console.log(imap);

for (const key of imap) {
  console.log(key);
}

//If we want to print key and value differantly we can use the following syntax

for (const [key, value] of imap) {
  console.log(key, ":-", value);
}

for (const [value] of imap) {
  console.log(":-", value);
}
