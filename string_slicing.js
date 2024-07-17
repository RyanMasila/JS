// String slicing = creating a substring from a portion of 
//                  another string

                    // string.slice(start, end)

const fullName = "Ryan Masila"

// let firstName = fullName.slice(0, 4)
// console.log(firstName)

// let lastName = fullName.slice(5)
// console.log(lastName)

// let firstChar = fullName.slice(0,1)
// console.log(firstChar)

// let lastChar = fullName.slice(-1)
// console.log(lastChar)

let firstName = fullName.slice(0, fullName.indexOf(" "))
let lastName = fullName.slice(fullName.indexOf(" ") + 1)

const email = "ryanmasila12@gmail.com"

let username = email.slice(0, email.indexOf("@"))
let extension = email.slice(email.indexOf("@") + 1)
console.log(username)
console.log(extension)


console.log(firstName)
console.log(lastName)