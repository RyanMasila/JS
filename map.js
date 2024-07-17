//.map() = accepts a callback and applies that function
//         to each element of an array, then returns a new array

const numbers = [1, 2, 3, 4, 5];

const students = ["Ryan", "Bob", "Ace", "Nadine"];

// function square(element){
//     return Math.pow(element, 2);
// }

// const squares = numbers.map(square);

// console.log(squares)

const squares = numbers.map((number) => {
    const square = Math.pow(number, 2);
    return square;
})

const cubes = numbers.map((number) => {
    const cube = Math.pow(number, 3);
    return cube;
})

const studentUppercase = students.map((student) => {
    const studentUpper = student.toUpperCase();
    return studentUpper;
})

const lowerCase = students.map((student) => {
    const studentUpper = student.toLowerCase();
    return studentUpper;
})

console.log(squares);
console.log(cubes);
console.log(studentUppercase);
console.log(lowerCase);

const dates = ["2024-1-10", "2003-2-18", "2026-3-30"];

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

const formattedDates = dates.map(formatDates);
console.log(formattedDates);