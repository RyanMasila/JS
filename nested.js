/*
    nested objects = Objects inside of other objects.
                     Allows you to represent more complex data structures
                     Child object is enclosed by a Parent object

                     Person{Address{}, ContactInfo{}}
                     ShoppingCart{keyboard{}, Mouse{}, Monitor{}}
*/

const person = {
    fullName: "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jelly fishing", "cooking"],
    address: {
        street: "124 Conch St.",
        city: "Bikini Bottom",
        country: "Int. Water"
    }
}
console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies);
console.log(person.hobbies[2]);
console.log(person.address.street);

for(const property in person.address){
    console.log(person.address[property]);
}

class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address)
    }
}

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Ryan Nzyimi", 21, "Discovery",
                                              "Githurai", 
                                              "Kenya");
console.log(person1);
console.log(person1.address.street);

const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159},
                {name: "pineapple", color: "yellow", calories: 37}
               ]

// fruits.pop();
// fruits.splice(1, 2);
// fruits.push({name: "grapes", color: "purple", calories: 62});
// console.log(fruits[1].calories);
// console.log(fruits);

fruits.forEach(fruit => console.log(fruit.color));

const fruitNames = fruits.map(fruit => fruit.name);

console.log(fruitNames);

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowCalories = fruits.filter(fruit => fruit.calories <= 50);
const maxFruit = fruits.reduce((max, fruit) => 
                                fruit.calories > max.calories ? fruit : max);

const minFruit = fruits.reduce((min, fruit) => 
                                fruit.calories < min.calories ? fruit : min);
console.log(yellowFruits);
console.log(lowCalories);
console.log(maxFruit);
console.log(minFruit);