console.log(`HI! There`);
// window.alert(`An Alert Window`);

//This is a comment

/*
  This
  is a
  Multi line
  comment
*/

document.getElementById("myH1").textContent = `Welcome to JS`;
document.getElementById("myP").textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolorem sit labore eligendi, minima eos laudantium, neque, culpa fugiat voluptas fugit quibusdam incidunt fuga nisi at recusandae animi facere! Perspiciatis!`

// variable = A container that stores a value.

//1. declaration   let x;
//2. assignment    x = 10;

// Numbers
let x = 10;
let price = 15.99;
let age = 20;
console.log(typeof x);
console.log(`I am ${age} years old.`);
console.log(`This costs $${price}.`);

// Strings
let firstName = "Ryan";
console.log(typeof firstName);
console.log(`My first name is ${firstName}.`)

//  Boolean
let online = true;
let offline = false;
console.log( typeof online);
console.log(`He is online: ${offline}`);

let fullName = "Ryan Nzyimi";
let student = true;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = age;
document.getElementById("p3").textContent = student;
