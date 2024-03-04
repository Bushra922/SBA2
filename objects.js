// objects.js

// declare an object the same way that you would any other variable
// use let, var, or const
// similar to arrays, you can declare an object using const, and still change what's in that object
// = {}
// the curly braces are how we know that it's an object
// so then everything inside needs to be a key: value pair
// a value can be any variable type, which inclues arrays and other objects
// objects have unique keys, so if you duplicate a key, the most recent one overwrites anything prior
const vehicle = {
	color: "blue",
	// hp: 4000,
	year: 1989, 
    "active registration": true,
    engine: {
        cylinders: 6,
        hp: 4000,
        size: 3.2
    }
}

console.log(vehicle);

// each key/value pair can be accessed individually
console.log('the vehicle color');
console.log(vehicle.color);
console.log('the vehicle hp');
console.log(vehicle.hp);
console.log('the vehicle year');
console.log(vehicle.year);

// i want to paint my car silver
// changing a value of an existing key: value pair
vehicle.color = "silver";

console.log(vehicle);

// adding a new key
vehicle.model = "civic";
console.log(vehicle);

vehicle.model = "Civic";
console.log(vehicle);

// know that this exists and is how you would use a variable that is holding the key name
// but we will use dot notation for the majority of things
console.log(vehicle["color"]);
console.log(vehicle["active registration"]);

// i can also delete a key
delete vehicle["active registration"];

console.log(vehicle);

// if you duplicate a key, the latest assignment of a value is what you will see
const borough = {
    name: "The Bronx",
	name: "Brooklyn",
	// name: "The Bronx"
}

console.log(borough); // { name: "The Bronx" }

// Another type of for loop
console.log('_____for in loop_____');
for (const vehicleKey in vehicle) {
    // console.log("the key is:", key, "and the value is:", vehicle[key]);
    console.log(vehicleKey, ":", vehicle[vehicleKey]);
}


// objects in objects
// console.log(vehicle.engine);
// console.log(vehicle.engine.cylinders);
// console.log(vehicle.engine.hp);
console.log('vehicle engine size');
console.log(vehicle.engine.size);


// ===== comparing data collections =====
// if i have two variables that describe data collections
// if they are different variables, even if they look the same to you, 
// they will not be equal
let myMovies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];
let yourMovies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];

console.log("===== comparing data collections =====")
console.log(myMovies == yourMovies); // false

// you can make one array variable equal to another by assignment
let otherMovies = myMovies;
console.log("===== comparing copied data collections =====")
console.log(myMovies == otherMovies); // ?

// change the value of myMovies[0]
myMovies[0] = "Clueless";
console.log('after changing something in myMovies');
console.log(myMovies);
console.log(yourMovies);
console.log(otherMovies);

otherMovies[0] = 'Moana';
console.log('after changing something in otherMovies');
console.log(myMovies);
console.log(yourMovies);
console.log(otherMovies);

// what type of variable would I use?
// the name of my cat? a string
let name = "Arrow";
// the age of my cat? a number
let age = 3;
// my cat's favorite things? an array of string
let favoriteThings = ['food', 'toys', 'blankets', 'computers'];
// can my cat speak French? boolean
let speaksFrench = false;
// whether my cat can solve a Rubik's cube? boolean
let solveCube = false;
// my cat? an object
const myCat = {
    catName: name,
    age: age,
    favoriteThings: favoriteThings,
    speaksFrench: speaksFrench,
    solveCube: solveCube
}
console.log(myCat)