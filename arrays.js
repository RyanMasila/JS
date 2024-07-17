// array = a variable like structure that can hold more
//          than 1 value

let fruits = ["apple", "pineapple", "banana", "coconut"];

fruits.push("watermelon"); // push() appends an element to the end of an array
fruits.pop(); // pop() removes the last element of an array
fruits.unshift("mango"); // unshift() appends an element at the beginning of an array
fruits.shift(); // shift() removes an element at the beginning of an array

let numOfFruits = fruits.length;
let index = fruits.indexOf("pineapple");

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

fruits.sort().reverse();

for (let fruit of fruits){
    console.log(fruit);
}

for(let i = fruits.length - 1; i >= 0; i--){
    console.log(fruits[i]);
}

console.log(fruits);
console.log(numOfFruits)
console.log(index)