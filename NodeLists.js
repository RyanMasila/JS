/*
NodeList = Static collection of HTML elements by (id, class, element)
           Can be created by using querySelectorAll()
           Similar to an array, but no (map, filter, reduce)
           NodeList won't update to automatically reflect changes
*/

let buttons = document.querySelectorAll(".myButtons");

// ADD HTML/CSS PROPERTIES

// buttons.forEach(button => {
//     button.style.backgroundColor = "green";
//     button.textContent += "😠";
// });

// CLICK event listener

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato";
    })
})

// MOUSEOVER + MOUSEOUT event listener

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "rgba(255, 0, 0, 0.991)"
    })
});
buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "rgba(255, 0, 0, 0.801)"
    })
});

// ADD AN ELEMENT

// STEP 1
const newButton = document.createElement("button");

// STEP 2
newButton.textContent = "Button 5";
newButton.classList = "myButtons";

// STEP 3
document.body.appendChild(newButton);

buttons = document.querySelectorAll(".myButtons");

console.log(buttons);

// REMOVE AN ELEMENT

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);
    })
})