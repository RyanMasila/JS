// spread operator = ...allows an iterable such as an array
//                  or string to be expanded into separate
//                  elements (unpacks the elements)

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);
// for(let number of numbers){console.log(number)}

let username = "Ryan Masila"
let letters = [...username].join("-");

console.log(maximum)
console.log(minimum)
console.log(letters);

let fruits = ["apple", "orange", "potatoes"];
let vegetables = ["carrots", "celery", "potatoes"];

let food = [...fruits, ...vegetables, "eggs", "milk"];

console.log(food);