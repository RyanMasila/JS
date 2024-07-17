//  function = A section of reusable code.
//               Declare code oncuechange, use it whenever you want.
//               Call the function to execute that code.

function happyBirthday(username, age) {
    console.log(`Happy birthday to you ${username}`)
    console.log(`You are ${age} years old`)
}

happyBirthday("Ryan", 21)

function add(a, b) {
    return a + b
}

let sum = add(60,45)
console.log(sum)

function isEven(number) {
    if(number % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isEven(81))

function isValidateEmail(email) {
    if(email.includes("@")) {
        return true;
    }
    else{
        return false
    }
}

console.log(isValidateEmail("ryanmasila12@gmail.com"))
console.log(isValidateEmail("ryanmasila12gmail.com"))