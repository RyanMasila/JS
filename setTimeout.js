/*
setTimeout() = function in Javascript that allows you to
               schedule the execution of a function after an
               amount of time (milliseconds)
               Times are approximate (varies based on the workload
                of the Javascript runtime env.)
                setTimeout(callback, delay);
*/


// const timeoutId = setTimeout(() => window.alert("Hello"), 3000);

// clearTimeout(timeoutId);
// console.log(timeoutId);

let timeoutId;

function startTimer(){
    timeoutId = setTimeout(() => window.alert("Hello"), 3000);
    console.log("STARTED");
}


function clearTimer(){
    clearTimeout(timeoutId);
    console.log("CLEARED")
}