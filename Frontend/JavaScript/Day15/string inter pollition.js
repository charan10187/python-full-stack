// arrow function: it is a function that does not have its own 'this' context, and it is often used for shorter syntax and to avoid issues with 'this' in callbacks. it is introduced in ES6 (ECMAScript 2015) and is a more concise way to write functions.

// syntax: 
//  variable identifier = (parameters) => { statements }
// 
//                      identifiername()
// 

// Example of an arrow function
const add = (a, b) => a + b;
var greet=()=>{
    console.log("Hello, World!");
}
greet();

// arrow function with only one parameter, with or without braces we can assign
// Example of an arrow function with one parameter
var surfaceAreaofcube = (side) => side * side * 6;
console.log(surfaceAreaofcube(3)); // Output: 54
// or we can also write it with braces and a return statement
var surfaceAreaofcube = (side) => {
    console.log( side * side * 6)
};
surfaceAreaofcube(3)

// arrow function with multiple parameters
// variable identifier = (param1, param2, param3) => { statements }
var multiply = (a, b) => a * b;
console.log(multiply(2, 3)); // Output: 6

var areaOfRectangle = (length, width) =>{
    console.log(length * width);
    console.log(`the length and width of rectangle is ${length} and ${width} and multiplication of length and width is ${length * width}`);
};
areaOfRectangle(5, 10); // Output: 50

// arrow function with no parameters
var sayHello = () => console.log("Hello!");
sayHello(); // Output: Hello!

// arrow function with return statement
var square = (x) => {
    return x * x;
};
console.log(square(5)); // Output: 25

let result=AreaofRectangle(l=5,b=10);
console.log(`the length and width of rectangle is ${l} and ${b} and multiplication of length and width is ${result}cm^2`);


