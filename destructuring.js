/*
    destructuring = extracting values from arrays and objects,
    then assign them to variables in a convenient way
    [] = to perform array destructuring
    {} = to perform object destructuring
*/

// SWAPPING THE VALUES OF TWO VARIABLES
let a = 5;
let b = 6;

[a, b] = [b, a];

console.log(a);
console.log(b);

// SWAPPING 2 ELEMENTS IN AN ARRAY

const colors = ["red", "green", "blue", "black", "yellow"];

[colors[0], colors[3]] = [colors[3], colors[0]]

console.log(colors);

// ASSIGNING ARRAY ELEMENTS TO VARIABLES

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

// EXTRACTING VALUES FROM OBJECTS

const person1 = {
    firstName: "Ryan",
    lastName: "Nzyimi",
    age: 21,
    job: "Web Developer",
    gender: "Male"
}

const person2 = {
    firstName: "Bob",
    lastName: "Kariuki",
    age: 18,
    job: "Businessman"
}

const {firstName, lastName, age, job, gender="Male"} = person1;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);
console.log(gender);

// DESTRUCTURE IN FUNCTION PARAMETERS
function displayPerson({firstName, lastName, age, job, gender="Not provided"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`)
    console.log(`gender: ${gender}`)
}

displayPerson(person2);