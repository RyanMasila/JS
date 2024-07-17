// while loop = repeat some code WHILE some condition is true

let username;

// do {
//      username = window.prompt("Enter your name");
// }
// while(username === "" || username === null)

// console.log(`Hello ${username}`)

let loggedIn = true;
let password;

do{
     username = window.prompt(`Enter your username`);
     password = window.prompt('Enter your password');

     if(username === "RyanMasila" && password === "Ryan6881"){
          loggedIn = true;
          console.log("Your are logged in")
     }
     else {
          console.log("Wrong Credentials")
     }
}while(!loggedIn)