const accountId = 144553;
let accountEmail = "preet@gmail.com";
var accountPassword = "1258";
accountCity = "Jaipur";

// accountId = 2; //Not Allowed

accountEmail = "Preet@@gmail..com";
accountPassword = "147";
accountCity = "Sikar";

let accountState;

console.log(accountId);

/* 
Prefer not use var
because of issue in block scope and functional scope  
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

