// function declaration = define a reusable block of code
//                         that performs a specfic task

function hello(){
    console.log("Hello");
}

// function expressions = a way to define functions as values
//                        or variables

const helloWorld = function(){
    console.log("Hello World!");
}
// hello();
// helloWorld();

setTimeout(helloWorld, 5000);

setTimeout(function(){
    console.log("Ryan Nzyimi");
}, 3000)

const numbers = [2, 3, 5, 7, 4, 6];
const squares = numbers.map(function(element){
    return Math.pow(element, 2);
})

console.log(squares);

const cubes = numbers.map(function(element){
    return Math.pow(element, 3)
})

console.log(cubes);

const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
})

console.log(evenNums);

const oddNums = numbers.filter(function(element){
    return element % 2 !== 0;
})

console.log(oddNums);

const total = numbers.reduce(function(accumulator, element){
    return accumulator + element;
})

console.log(total);