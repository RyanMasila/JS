/*
DOM = DOCUMENT OBJECT MODEL
      Object{} that represents the page you see in the web browser
      and provides you with an API to interact with it.
      Web browser constructs the DOM when it loads a HTML document,
      and structures all the elements in a tree-like representation.
      Javascript can access the DOM to dynamically
      change the content, structure, and style of the page.
*/
// console.log(document);

// document.title = "Document Object Model";
// document.body.style.backgroundColor = "hsl(0, 0%, 15%)";
// console.dir(document);

const username = "Ryan Masila";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? `Guest` : username;