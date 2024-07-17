/*
JSON = (JavaScript Object Notation) data-interchange format
        Used for exchanging data between a server and a web application
        JSON files {key:value} OR [value1, value2, value3]

        JSON.stringify() = converts a JS object to a JSON string.
        JSON.parse() = converts a JSON string to a JS object
*/

const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const person = {
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Jellyfishing", "Karate", "Cooking"]
};
const people = [{
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true
},
{
    "name": "Squidward",
    "age": 50,
    "isEmployed": true
},
{
    "name": "Patrick",
    "age": 30,
    "isEmployed": false
},
{
    "name": "Sandy",
    "age": 27,
    "isEmployed": false
}
]

// ------JSON.stringify()------
const jsonString1 = JSON.stringify(names);
const jsonString2 = JSON.stringify(person);
const jsonString3 = JSON.stringify(people);
console.log(jsonString1);
console.log(jsonString2);
console.log(jsonString3);

const jsonNames= `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const jsonPerson = `{"name": "Spongebob", "age": 30, "isEmployed": true, "hobbies": ["Jellyfishing", "Karate", "Cooking"]}`;
const jsonPeople = `[{"name": "Spongebob", "age": 30, "isEmployed": true},
                 {"name": "Squidward", "age": 50, "isEmployed": true},
                 {"name": "Patrick", "age": 30, "isEmployed": false},
                 {"name": "Sandy", "age": 27, "isEmployed": false}]`;

const parsedData = JSON.parse(jsonPeople);
console.log(parsedData);

//response.json also returns a Promise

fetch("people.json")
     .then(response => response.json()) // convert response to json format
     .then(values => values.forEach(value => console.log(value.isEmployed)))
     .catch(error => console.error(error));