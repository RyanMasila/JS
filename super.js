/*
    super = keyword is used in classes to call the constructor or
            access the properties and methods of a parent (superclass)
            this = this object
            super = this parent
*/

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`This ${this.name} moves at a speed of ${speed}mph`)
    }

}

class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
    
}

class Hawk extends Animal{
    constructor(name, age, flightSpeed){
        super(name, age);
        this.flightSpeed = flightSpeed;
    }
    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flightSpeed);
    }
    
}
class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
    
}

const rabbit = new Rabbit("rabbit", 2, 25);
const hawk = new Hawk("hawk", 3, 100);
const fish = new Fish("fish", 1, 55);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
rabbit.run();
fish.swim();
hawk.fly();