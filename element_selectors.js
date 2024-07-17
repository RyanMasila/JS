/*
element selectors = Methods used to target and manipulate HTML elements
                    They allow you to select one or multiple HTML elements
                    from the DOM (Document Object Model)

1. document.getElementById()  // ELEMENT OR NULL
2. document.getElementsByClassName() // HTML COLLECTION
3. document.getElementsByTagName() // HTML COLLECTION
4. document.querySelector() // FIRST ELEMENT OR NULL
5. document.querySelectorAll() // NODELIST Nodelists have built in forEach() method 
*/

const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log(myHeading);

const fruits = document.getElementsByClassName("fruits");
// console.log(fruits);

// fruits[0].style.backgroundColor = "red";
// HTML collections do not have a forEach() method


// for(let fruit of fruits){
//     fruit.style.backgroundColor = "cyan";
// }

Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "purple";
})

const h4Elements = document.getElementsByTagName("h4");

console.log(h4Elements);

// h4Elements[0].style.backgroundColor = "orange";

// for(let h4Element of h4Elements){
//     h4Element.style.backgroundColor = "orange";
// }

const liElements = document.getElementsByTagName("li");

// for(let liElement of liElements){
//     liElement.style.backgroundColor = "lightgreen";
// }

Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "orange";
})

Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "lightgreen";
})



// const element = document.querySelector(".fruits");

const element = document.querySelector("ol");

// element.style.backgroundColor = ("lightblue");

console.log(element);

const fruits1 = document.querySelectorAll(".fruits");
const foods = document.querySelectorAll("li");

fruits[2].style.backgroundColor = "violet";

foods[4].style.backgroundColor = "brown";

console.log(foods);

foods.forEach(food => {
    food.style.backgroundColor = "grey";
})