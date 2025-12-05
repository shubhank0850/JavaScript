/* Note :
1. Prefere not to use var
   because of issue in block scope and functional scope

2. In Js if you declare a variable and does not assign a value to it,
   then it prints undefined. (Eaxmple: line 13)
*/

const accountId = 13335
let accountEmail = "shubhank@google.com"
var accountPassword = "12345"
accountCity = "Nagpur"
let accountState;

// accountId = 2 : changing/updating const variable is not allowed.

accountEmail = "bawankar@gmail.com"
accountPassword = "54321"
accountCity = "Mumbai"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])