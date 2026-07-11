const accountId=12345
let accountEmail="yash@gamil.com"
var accountPassword="12345"
accountCity="mumbai"
let accountState;

// accountId==2  // not allowed if it is const
accountEmail="abcd@gmail.com"
accountPassword="54321"
accountCity="pune"
console.log(accountId);
/*
Prefer not to use var
beacuse of issue in block scope and functional scope.
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);