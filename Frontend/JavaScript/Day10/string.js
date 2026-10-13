// string: It is a sequence of characters which represents the text

// there is no character typeof(similar to python and difference from (C,C++, java))

// 3-ways

// 1. by using literals
// 2. by using string constructor
// 3. by using template literals(string interpolation)

// 1. by using literals

var str=" we can use enclosed the string within 'double quorts' with in 'double' quotes we cannot use 'double' quotes , But we cna use 'single' quotes and we cannot go to next line "

console.log(str)


// 2. by using string constructor

var str=' we can use enclosed the string within "single quorts" with in" single  quotes" we cannot use "single" quotes , But we cna use "double" quotes and we cannot go to next line '

console.log(str)

// 3. by using string interpolition(template literals)

// we can either use a single/double quotes 
// to create a string or we can use a single/double and also both to create a string
// we enclosed within back tick, and we use multiline string

var poem= `wertyuiop
wertyuio
dfghjkl
xcvbnm
jsdfghj`

console.log(poem)

// template literals ${}=> allows to embed an expression within backtick for dynamic string creation, making more redable and versatile
var num1=10
var num2=20

result=`the addition of ${num1} and ${num2} is ${num1+num2}`

console.log(result)



// write a js program to accept a car name car color from the user and display the car name and the car color in the entered car color on the webpage