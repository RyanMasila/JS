// String methods = allow you to manipulate and work with text

let userName = "     RyanMasila       "

console.log(userName)

//charAt() returns a character of a given index
let firstCharacter = userName.charAt(0)
console.log(firstCharacter)

//indexOf() returns the index of the first occurence of a given character
console.log(userName.indexOf('a'))

//lastIndexOf returns the index of the last occurence of a given character
console.log(userName.lastIndexOf("a"))


//length returns the number of characters forming a string (length of the string)
console.log(userName.length)

//trim() removes whitespaces at the beginning/end of a string

userNameTrimed = userName.trim();

console.log(userNameTrimed)

//toUpperCase() converts a whole string to uppercase
console.log(userName.toUpperCase())

//toLowerCase() converts a whole string to lowercase
console.log(userName.toLowerCase())

//repeat(n) repeats a string n times

console.log(userName.repeat(5))

//startsWith() returns true if a string starts with the given character and false if not

console.log(userName.startsWith(""))

//endsWith() returns true if a string ends with the given character and false if not

console.log(userName.endsWith(" "))

//includes returns true if a string contains the given character and false if not
console.log(userName.includes("R"))

let phone = "011-304-1342"

//replaceAll() replaces any instance of the character given as the
// first parameter with the one provided as the second parameter in a string
newPhone = phone.replaceAll("-", "")

console.log(newPhone)

//padStart(x, y) appends y at the beginning of a string until the length of
// the string is x
console.log(phone.padStart(15, "1"))

//padEnd(x, y) appends y at the end of a string until the length of
// the string is x
console.log(phone.padEnd(15, "0"))