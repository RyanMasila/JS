/*
sort() = method used to sort elements of an array in place.
         Sorts elements as strings in lexicographic order, not alphabetical
         lexicographic = (alphabet + numbers + symbols) as strings
         All elements are treated as strings
*/

const fruits = ["apple", "orange", "banana", "coconut", "pineapple"]

let numbers = [1, 10, 2, 5, 7, 3, 6, 8, 9, 1000];

fruits.sort();
numbers.sort((a, b) => b - a);

console.log(fruits);
console.log(numbers);

const people = [{name: "Spongebob", age: 30, gpa: 3.0},
                {name: "Patrick", age: 37, gpa: 1.5},
                {name: "Squidward", age: 51, gpa: 2.5},
                {name: "Sandy", age: 27, gpa: 4.0}]

// people.sort((a, b) => b.age - a.age);

// people.sort((a, b) => b.gpa - a.gpa);

people.sort((a, b) => b.name.localeCompare(a.name));



console.log(people);