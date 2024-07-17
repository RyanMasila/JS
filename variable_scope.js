// variable scope = where a variable is recognized and accessible (local or global)

let x = 3;  //global variable

function function1() {
    let x = 5  //local variable
    console.log(x);
}

function function2() {
    let x = 7
    console.log(x);
}

function1()