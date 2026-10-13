
var num1=prompt("num1 :")
var num2=prompt("num2 :")
var key=prompt("operator :")


switch (key) {
    case "+": document.getElementById("result").innerHTML="The Addition of"+ num1 + "+" + num2 + "is" + (Number(num1)+Number(num2)) 
        
        break;
    case "-": document.getElementById("result").innerHTML="The - of"+ num1 + "+" + num2 + "is" + (Number(num1)-Number(num2)) 
        
        break;
    case "*": document.getElementById("result").innerHTML="The * of"+ num1 + "+" + num2 + "is" + (Number(num1)*Number(num2)) 
        
        break;
    case "/": document.getElementById("result").innerHTML="The / of"+ num1 + "+" + num2 + "is" + (Number(num1)/Number(num2)) 
        
        break;
    case "%": document.getElementById("result").innerHTML="The % of"+ num1 + "+" + num2 + "is" + (Number(num1)%Number(num2)) 
        
        break;
    case "**": document.getElementById("result").innerHTML="The ** of"+ num1 + "+" + num2 + "is" + (Number(num1)**Number(num2)) 
        
        break;

    default:
        document.getElementById("result").innerHTML="invalid Operator"
        break
}

// write a javascript program to accept two numbers by using Promots by using prompt() method and perform the following arthematic operations: +, -, *, /

// Requirements

// 1.accepr two numbersfrom the User
// 2.check weather both input are valid numbers using isNaN()
// 3. If either input is invalid, display the message "please enter valid numbers only"
// 4. If both input are valid, perform and display all four arthematic operations
// 5. if the second number is zero , display "not possible by zero " insted of performance
// 6. Display the result inside the HTML element whose result, in innerHTML
// 