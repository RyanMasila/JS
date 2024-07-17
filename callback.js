// callback = a function that is passed as an argument to another function
//            used to handle asynchronous operation:
//            1. Reading a file
//            2. Network requests
//            3. Interacting with databases


hello(wait);

function hello(callback) {
    console.log("Hello!");
    callback();
}

function wait() {
    console.log("wait!")
}

function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}

function displayConsole(result) {
    console.log(result)
}

function displayPage(result) {
    document.getElementById("text").textContent = result;
}

sum(displayPage, 5, 7)