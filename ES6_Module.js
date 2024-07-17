/*
ES6 Module = An external file that contains reusable code
             that can be imported into other Javascript files.
             Write reusable code for many different apps.
             Can contain variables, classes, functions ...and more
             Introduced as part of ECMAScript 2015 update
*/

import {PI, getCircumference, getArea, getVolume} from "../mathUtil.js";

console.log(PI);

const circumference = getCircumference(7);
const area = getArea(7);
const volume = getVolume(7);

console.log(`${circumference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm`);
console.log(`${volume.toFixed(2)}cm`)