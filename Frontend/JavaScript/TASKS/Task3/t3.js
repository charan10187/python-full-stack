// var num1 = prompt("Enter the first number:");
// var num2 = prompt("Enter the second number:");

// if (isNaN(Number(num1)) || isNaN(Number(num2))) {
//     document.getElementById("result").innerHTML ="Please enter valid numbers only";
//     } 
// else {
//     num1 = Number(num1);
//     num2 = Number(num2);

//     var output = "";

//     output += "Addition: " + (num1 + num2) + "<br>";
//     output += "Subtraction: " + (num1 - num2) + "<br>";
//     output += "Multiplication: " + (num1 * num2) + "<br>";

//     if (num2 === 0) {
//         output += "Division: Not possible by zero<br>";
//         output += "Modulo: Not possible by zero<br>";
//         } 
//     else {
//         output += "Division: " + (num1 / num2) + "<br>";
//         output += "Modulo: " + (num1 % num2) + "<br>";
//         }

//         output += "Exponentiation: " + (num1 ** num2);

//         document.getElementById("result").innerHTML = output;
//         }


var num1=prompt("num1:")
var num2=prompt("num2:")

if (isNaN(num1) || isNaN(num2)){
    output="enter a valid number";
}
else if (Number(num2)!==0){
    output=
    "Addition:"+ Number(num1+num2) +"<br>"+
    "subraction:"+ Number(num1-num2) +"<br>"+
    "multiplication:"+ Number(num1*num2) +"<br>"+
    "Division:"+ Number(num1/num2) +"<br>";
}
else {
    output=
    "Addition:"+ Number(num1+num2) +"<br>"+
    "subraction:"+ Number(num1-num2) +"<br>"+
    "multiplication:"+ Number(num1*num2) +"<br>"+
    "Division: Division not possible with zero";
}

document.getElementById("result").innerHTML=output;