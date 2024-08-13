const accountId= 144553
let accountEmail ="rohan@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

//acccountID = 2// not allowed to change the value  of const

accountEmail ="rp@rp.com"
accountPassword = "21212121"
accountCity = "Bengaluru"
let accountState; //if nothing is assigned then it is considered as undefined

console.log(accountId); 
/*Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword,accountCity,accountState])





