// this = reference to the object where THIS is used
//        (the object depends on the immediate context)
//        person.name = this.name

const person = {
    firstName: "Ryan",
    lastName: "Masila",
    favFood: "chapatti",
    sayHello: function(){console.log(`Hello, I am ${this.firstName}`)},
    sayFavFood: function(){console.log(`I love eating ${this.favFood}`)}
}

person.sayHello();
person.sayFavFood();