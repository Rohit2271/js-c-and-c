const accountId = 155423
let accountEmail = "yadav10oct92@gmail.com"
var accountPassword = "12345"
accountCity = "Jaunpur"
let accountState;

//accountEmail = "abcd@gmail.com"// allowed variable
//accountId = 2 //not allowed for const
//var accountPassword = "54321"// change password so this reason to not use var 

/*
console.log(accountId)
console.log(accountEmail)
console.log(accountPassword)
console.log(accountCity)
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
prefer not to use var beacause of issue in block scope and functional scope
*/