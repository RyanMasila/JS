/*
eventListener = Listens for specific events to create interactive web pages
                events: click, mouseover, mouseout
                .addEventListener(event, callback / arrow function)
*/

const myBox = document.getElementById("myBox");

const myButton = document.getElementById("myButton");



myButton.addEventListener("click", event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "Ouch! 😢";
});

myButton.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do it 😯";
});

myButton.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click Me 😄";
})

// myButton.addEventListener("mouseout", event => {
//     event.target.style.backgroundColor = "lightgreen";
//     event.target.textContent = "Click Me 😄";
// })