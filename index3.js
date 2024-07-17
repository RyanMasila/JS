// const = a variable that can't be changed

const PI = 3.14159;

// let radius = window.prompt("Enter Radius:");
// radius = Number(radius);

// let circumference = 2 * pi * radius;

// console.log(circumference);

let radius;
let circumference;

document.getElementById("submit").onclick = function () {
    radius = document.getElementById("rad").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("h3").textContent = `The circumference of a cicle of radius ${radius} cm is ${circumference}.`;
}