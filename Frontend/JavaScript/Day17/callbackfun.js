// Higher-Order Function(HOF) (it is takinganother function as argument or returns function ) and

// callback function (it is passed as an argument to another function)

function greet(name) {
    return `Hello, ${name}!`;
}   
function processUserInput(callback) {
    
    console.log(callback("charan")); // calling the callback function with argument "charan"
}
processUserInput(greet); // passing greet function as an argument to processUserInput function

// greet is a normal function
// processUserInput is a `higher-order` function because it takes another function (greet) as an argument. The greet function is a callback function because it is passed to processUserInput and invoked within it.

function add(a, b) {
    return a + b;
}

function demo(callback) {
    console.log(callback(10, 5));
}
demo(add);

// student result ( >=35 student passed. else student failed)
function result(marks) {
    if (marks >= 35) {  
        return "Student passed";
    } else {
        return "Student failed";
    }
}
function checkResult(callback) {
    console.log(callback(40)); // calling the callback function with argument 40
}
checkResult(result); // calling checkResult function with result function as argument

// callback using settimeout function
setTimeout(()=>{
    console.log("This message is displayed after 2 seconds");
}, 2000);

function displayMessage(){
    console.log("This message is displayed after 5 seconds");
    console.log()
}
setTimeout(displayMessage, 5000); // passing displayMessage function as an argument to setTimeout function



