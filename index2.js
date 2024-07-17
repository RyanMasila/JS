// Arithmetic Operations

let students = 45;
students += 1; // Augmented assignment operator (+=)

students **= 2; // Exponent Operator (**)

let rem = students % 3;
students /= 2;
students--;
students++;
console.log(students);
console.log(rem);

/*

    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division & modulo
    4. addition and subtraction

*/
let result = 1 + 2 * 3 + 4 ** 2;
let result2 = 12 % 5 + 8 / 2;
console.log(result2)


// How to accept user input

//  1. EASY WAY: window prompt

// let username = window.prompt("What is your name?");
// document.getElementById("p4").textContent = username;


//  2. PROFESSIONAL WAY: HTML textbox

let username;

document.getElementById("mySubmit").onclick = function () {
    username = document.getElementById("text").value;
    document.getElementById("p4").textContent = `Hello, ${username}`;

}

// type conversion = change the data type of a value 
//                   to another (strings, numbers, booleans)

let age = window.prompt("How old are you?");
let names = "Ryan";
let x = "";
let y = "";
let z = "";

x = Number(x);
y = String(y);
z = Boolean(z);
names = Number(names);
// names = String(names);
// names = Boolean(names);
age = Number(age);
age += 1;
console.log(`You are ${age} years old.`, typeof age);
console.log(names, typeof names);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);