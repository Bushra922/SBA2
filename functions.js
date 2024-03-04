// functions.js

// I need to invoke the function for it to run

// myFunctionName('my arguments');

// the one below cannot run before it is defined because of the way that
// i used the function expression
// myFunctionName2('more arguments');

// Three ways to define a function
// 1. Function declaration
function myFunctionName(paramsPassingIn) {
    console.log("this is printing...", paramsPassingIn);
}

// 2. Function Expression
const myFunctionName2 = function (paramsPassingIn) {
    console.log("this is printing...", paramsPassingIn);
}

// The biggest practical difference between the two of these is
// function expressions cannot be invoked before they are defined
// function declarations are _hoisted_ to the top of their scope


// I need to invoke the function for it to run
// myFunctionName('my arguments');
// myFunctionName2('more arguments');

for (let i = 0; i < 5; i++) {
    // console.log('in the loop');
    // myFunctionName('my arguments');
    // myFunctionName2('more arguments');
}

// 3. Arrow function
// comparing
// Function Declaration
// parameters are placeholders when I define my function
// function add(a, b) {
//     return a + b;
// }

// arrow function syntax
// () => {}
const add = (a, b) => {
    return a + b;
}

let sum = add('a', 'd');
console.log(sum);

// arguments are the things that I pass in when I invoke the function
// invoking the function is what makes it run
console.log(add(3, 4));


function areBothEven (n1, n2) {
    return !(n1 % 2) && !(n2 % 2);
}

function areBothEvenAlternate (n1, n2) {
    // let n1Even = !(n1 % 2);
        // if (n1 % 2 === 0) then my number is even
        // (n1 % 2) gives me a 0 (which looks like false) or a 1 which looks like true
        // remember 0 is falsy
        // so i need to flip whatever I get in order for this to do what I want
    // let n2Even = !(n2 % 2);

    let n1Even, n2Even;
    if (n1 % 2 === 0) n1Even = true;
    if (n2 % 2 === 0) n2Even = true;

    return n1Even && n2Even;
}

console.log( areBothEven(2, 4));
console.log( areBothEvenAlternate(2, 4));

// Practice Activity 1: Write a Function Declaration
function computeArea(width, height) {
    console.log(width, height)
    let area = width * height;
    return(`The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units.`);
}

console.log(computeArea(20, 2));

// Practice Activity 2: Write a function expression
const planetHasWater = function(planet) {
    if(planet.toLowerCase() === 'earth' || planet.toLowerCase() === 'mars') {
        return true;
    } else return false;
}

// return (planet === 'Earth' || planet === 'Mars')

console.log(planetHasWater('MARS'))



const getDevObject = function(name) {
    console.log('we are in here');
    // eventually, we want an object
    // { devName: , jobSkills; []}
    // we don't know how many arguments we are going to have
    console.log(arguments);
    console.log(name);

    let skills = [];
    for (let i=1; i < arguments.length; i++) {
        skills.push(arguments[i]);
        // console.log(skills);
    }
    // console.log(skills);

    return {
        devName: name,
        jobSkills: skills
    }
}

let maria = getDevObject('Maria', 'HTML', 'CSS', 'JavaScript', 'jQuery');
// console.log(maria)
// let anonymous = getDevObject('none', 'HTML', 'CSS', 'JavaScript', 'jQuery');

const multAdd = function () {
    console.log(arguments);
    let sum = 0;
    for (let num of arguments) {
        console.log(num);
        sum += num;
        console.log('sum is:', sum);
    }
    return sum;
}

const multAdd2 = function () {
    console.log(arguments);
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
        sum = sum + arguments[i];
    // for (let num of arguments) {
        // console.log(num);
        // sum += num;
        // console.log('sum is:', sum);
    }
    return sum;
}

let total = multAdd (3, 6, 2, 2, 8, 4, 2, 7, 6, 34, 123, 123, 34);
console.log(total);
let total2 = multAdd2 (3, 6, 2, 2, 8, 4, 2, 7, 6, 34, 123, 123, 34);
console.log(total2);