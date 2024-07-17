// RANDOM NUMBER GENERATOR

// const min = 50;
// const max = 100;

// let rand_Number2 = Math.floor(Math.random() * (max - min)) + min;

// let rand_Number = Math.floor(Math.random() * 6) + 1;

// console.log(rand_Number);
// console.log(rand_Number2);
// console.log(Math.floor(Math.random()));


const button = document.getElementById("button");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");

const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

button.onclick = function () {
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}