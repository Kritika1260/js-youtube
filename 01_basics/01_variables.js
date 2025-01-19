const accountId = 1234
let accountEmail = "kritika@gmail.com"
var accountPassword = "012"
accountCity = "Varanasi"
let accountState;

// accountId = 1 constant values cannot be changed
accountEmail = "abc.com"
accountPassword = "897"
accountCity = "delhi"
// console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
/*
note - prefer not to use var 
because of issue in block scope and functional scope
*/
