const accountId = 12345
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountcity = "jaipur"
let accountsatate;

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountcity = "bengaluru"

console.log(accountId);

/* 
    perfer not to use var because of issue in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountcity, accountsatate])
