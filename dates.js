/*
Date objects = Objects that contain values that represent dates and times
               These date objects can be changed and formatted
*/

//Date(year, month, day, hour, minute, second, ms)
const date1 = new Date(2024, 1, 1, 2, 3, 4, 5);

const date2 = new Date("2024-01-02T10:00:00Z");

const date3 = new Date(1700000000);

const date4 = new Date();

const year = date4.getFullYear();
const month = date4.getMonth();
const day = date4.getDate();
const hour = date4.getHours();
const minutes = date4.getMinutes();
const seconds = date4.getSeconds();
const dayOfWeek = date4.getDay();

// console.log(date1);
// console.log(date2);
// console.log(date3);
// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minutes);
// console.log(seconds);
// console.log(dayOfWeek);

const date = new Date();

date.setFullYear(2023);
date.setMonth(0);
date.setDate(2);
date.setHours(2);
date.setMinutes(3);
date.setSeconds(4);

console.log(date);

const date5 = new Date("2023-12-31");
const date6 = new Date("2024-01-01");

if(date6 > date5){
    console.log("HAPPY NEW YEAR!!!")
}