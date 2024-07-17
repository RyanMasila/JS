// -------------- EXAMPLE 1 <h1> ---------------

// STEP 1 CREATE THE ELEMENT
const newH1 = document.createElement("h1");
const newParagraph = document.createElement("p");
const newListItem = document.createElement("li");

// STEP 2 ADD ATTRIBUTES
newH1.textContent = "I like pizza!";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

newParagraph.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

// STEP 3 APPEND ELEMENT TO DOM
// document.body.prepend(newH1);
// document.getElementById("box1").append(newH1);
document.getElementById("fruits").append(newListItem);
// document.getElementById("box2").prepend(newH1);
// document.body.append(newParagraph);

// const box2 = document.getElementById("box2");
// const orange = document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newListItem, orange);

// const boxes = document.querySelectorAll(".box");

// document.body.insertBefore(newH1, boxes[2]);

// REMOVE HTML ELEMENT
// document.body.removeChild(newH1);

// document.getElementById("box1").removeChild(newH1);

// const listItems = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem, listItems[1])

document.getElementById("fruits").removeChild(newListItem);