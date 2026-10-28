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