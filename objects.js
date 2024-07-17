// object = A collection of related properties and/or methods
//          Can represent real world objects (people, products, places)
//          object = {key:value,
//                    function()}

// Methods are functions that belong to an object

const person = {
    firstName: "Ryan",
    lastName: "Masila",
    age: 21,
    isEmployed: false,
    sayHello: () => console.log(`Hello, I am ${person.firstName}`),
    eat: () => console.log(`I am eating omena`)
}

console.log(person.firstName, person.lastName, person.age, person.isEmployed)

person.sayHello();
person.eat();