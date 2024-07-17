// for loop = repeat some code a LIMITED amount of times

for(let i = 0; i <= 2; i++){
    console.log("Ryano")
}

for(let i = 10; i > 0; i-=2){
    console.log(i)
}

for (let i = 1; i <= 20; i++) {
    if(i == 13){
        continue //skips 13
    }
    else if(i == 15){
        break;  // breaks out of the loop completely
    }
    else{
        console.log(i)
    }
}