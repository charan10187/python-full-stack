

var carName = prompt("Enter the car name:");
var carColor = prompt("Enter the car color:");

result=document.getElementById("output")

result.innerHTML = `the car is <span id="name"> ${carName} </span> and color is <span id="color"> ${carColor}`;

document.getElementById("name").style.color=carColor
document.getElementById("color").style.color=carColor
console.log(result)




// not working need to look into it

// result.innerHTML = `the car is <span sytle='color:${carColor}'> ${carName} </span> and color is <span sytle="color:${carColor}"> ${carColor}`;