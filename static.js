/*
    static = keyword that defines properties or methods that belong
             to a class itself rather than the objects created from that class
             (class owns anything static, not the objects)
*/

class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }
    static getCicumference(radius){
        return 2 * this.PI * radius;
    }
    static getArea(radius){
        return this.PI * Math.pow(radius, 2);
    }
}


console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(7));
console.log(MathUtil.getCicumference(7));
console.log(MathUtil.getArea(7));

class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users online`)
    }

    sayHello(){
        console.log(`Hello, my username is ${this.username}`)
    }
}

const user1 = new User("Ryano");
const user2 = new User("Masila");

user1.sayHello();
user2.sayHello();
User.getUserCount();