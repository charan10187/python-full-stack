 
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
