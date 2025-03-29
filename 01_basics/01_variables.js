const accountId=144454
let accountEmail="n@gmail.com"
var accountPassword="1234"
accountCity="Goa"
let accountState;

// accountId=2 // not allowed

accountEmail="r@gmail.com"
accountPassword="6335e2365"
accountCity="pune"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and fuctional scope 
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

