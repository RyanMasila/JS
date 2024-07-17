/*
    getter = a special method that makes a property readable
    setter = a special method that makes a property writable

    validate and modify a value when reading/writing a property
*/

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.log("Width must be a positive number")
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.log("Height must be a positive number")
        }
    }

    get width(){
        return `${this._width.toFixed(1)}cm`;
    }

    get height(){
        return `${this._height.toFixed(1)}cm`;
    }

    get area(){
        return `${(this._width * this._height).toFixed(2)}cm^2`;
    }
}

const rectangle = new Rectangle(1000, 500);

rectangle.width = 10;
rectangle.height = 20;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error("First name must be a non-empty string")
        }
    }

    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else{
            console.error("Last name must be a non-empty string")
        }
    }

    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
            this._age = newAge;
        }
        else{
            console.error("Age must be a non-negative number")
        }
    }

    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
    get fullName(){
        return this._firstName + " " + this._lastName;
    }
    get age(){
        return this._age;
    }
}

const person1 = new Person("Ryan", "Masila", 21);
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.fullName)