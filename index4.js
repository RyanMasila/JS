// // Math = built-in object that provides a collection
// //        of properties and methods

// console.log(Math.PI);
// console.log(Math.E);// Euler's number

// let x = 3.94159;
// let s = 4;
// let y = 2;
// let sqr = 144;

// let z;
// let p;

// let r = -45;

// z = Math.round(x);
// p = Math.floor(x);
// c = Math.ceil(x);
// t = Math.trunc(x);

// raise_to = Math.pow(s, y);
// square_root = Math.sqrt(sqr);

// let lg = Math.log(100);
// let sn = Math.sin(90);
// let cs = Math.cos(90);
// let tn = Math.tan(365);

// let absolute_value = Math.abs(r);

// let max_value = Math.max(s, y, sqr);

// let min_value = Math.min(s, y, sqr);


// console.log(z);
// console.log(p);
// console.log(c);
// console.log(t);
// console.log(raise_to);
// console.log(square_root);
// console.log(lg);
// console.log(sn);
// console.log(cs);
// console.log(tn);
// console.log(absolute_value);
// console.log(Math.sign(r));
// console.log(max_value);
// console.log(min_value);

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const result = document.getElementById("result");

let age;

mySubmit.onclick = function () {
    age = myText.value;
    age = Number(age);

    if (age >= 100) {
        result.textContent = "You are TOO OLD to join this site.";
    }
    else if (age == 0) {
        result.textContent = "You can't enter. You were just born.";
    }
    else if (age >= 18) {
        result.textContent = "You are old enough to enter this site.";
    }
    else if (age < 0) {
        result.textContent = "Your age can't be below 0.";
    }
    else {
        result.textContent = "You must be 18+ to enter this site.";
    }

}

// ternary operator = a shortcut to if{} and else{} statements.
//                    helps to assign a variable based on a condition.
//                     condition ? codeIfTrue : codeIfFalse

let age1 = 20;

let message = age1 >= 18 ? "You are an adult" : "You are a minor";

console.log(message);

let isStudent = true;

let response = !isStudent ? "You are a student." : "You aren't a student.";
console.log(response);

let purchaseAmount = 200;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`)



