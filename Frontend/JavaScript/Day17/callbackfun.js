// HOF (it is takinganother function as argument or returns function ) and

// callback function (it is passed as an argument to another function)

function greet(name) {
    return `Hello, ${name}!`;
}   
function processUserInput(callback) {
    
    console.log(callback("charan")); // calling the callback function with argument "charan"
}
processUserInput(greet); // passing greet function as an argument to processUserInput function

// greet is a normal function
// processUserInput is a higher-order function because it takes another function (greet) as an argument. The greet function is a callback function because it is passed to processUserInput and invoked within it.