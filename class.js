/*
    class = (ES6 feature) provides more structured and clear way to
            work with objects compared to traditional constructor functions
            ex. static keyword, encapsulation, inheritance
*/

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: Ksh.${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax)
    }
}

const product1 = new Product("Jersey", 20.99);
const product2 = new Product("Trousers", 14.99);
const product3 = new Product("Coat", 100.00);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();

const salesTax = 0.05;

const total = product1.calculateTotal(salesTax);

console.log(`Total price (with tax): Ksh.${total.toFixed(2)}`)