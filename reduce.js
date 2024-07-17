// .reduce() = reduce the elements of an array to a single value

const prices = [5, 30, 10, 25, 15, 20];

function sum(previous, next){
    return previous + next;
}

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

const grades = [75, 50, 90, 80, 65, 95];

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}

const maximum = grades.reduce(getMax);

console.log(maximum);

function getMin(accumulator, element){
    return Math.min(accumulator, element);
}

const minimum = grades.reduce(getMin);

console.log(minimum);