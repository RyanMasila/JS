/*
    logical operators = used to combine or manipulate boolean
                        values (true or false)
                    AND = &&
                    OR = ||
                    NOT = !
*/

const temp = 10;

if(temp <= 0 || temp > 30) {
    console.log("The weather is BAD")
}
else {
    console.log("The weather is GOOD")
}

const isSunny = false
const hot = false

if(!isSunny && hot) {
    console.log("It is sunny")
}
else {
    console.log("It is cloudy")
}