/*
DOM Navigation = The process of navigating through the structure
                 of an HTML document using JavaScript

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children
*/

// ---------------- .firstElementChild ----------------

const element = document.getElementById("desserts");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "cyan";

const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
})

// ---------------- .lastElementChild ----------------
const element2 = document.getElementById("fruits");

const lastChild = element2.lastElementChild;

lastChild.style.backgroundColor = "lightgreen";

const ulElements2 = document.querySelectorAll("ul");

ulElements2.forEach(ulElement2 => {
    const lastChild = ulElement2.lastElementChild;
    lastChild.style.backgroundColor = "violet";
});


// ---------------- .nextElementSibling ----------------

const element3 = document.getElementById("vegetables");
const nextSibling = element3.nextElementSibling;
nextSibling.style.backgroundColor = "red";


// ---------------- .previousElementSibling ----------------

const element4 = document.getElementById("desserts");

const previousSibling = element4.previousElementSibling;
previousSibling.style.backgroundColor = "blue";


// ---------------- .parentElement ----------------

const element5 = document.getElementById("apple");

const parent = element5.parentElement;

parent.style.backgroundColor = "green"



// ---------------- .children ----------------

const element6 = document.getElementById("vegetables");
const children = element6.children;

console.log(children);

Array.from(children).forEach(child => {
    child.style.backgroundColor = "maroon";
})

children[2].style.backgroundColor = "orange";