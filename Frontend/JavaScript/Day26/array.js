// array is represented 


var a=[]
console.log(a);

var a=[10,20,"CHARAN"]
console.log(a);


var empDetails=new Array("ZOHO","developer","sri charan surepalli")
console.log(typeof empDetails,empDetails)

// accrssing first element
console.log("empDetails: "+ empDetails[0])

// accessing last element
last=empDetails.length
console.log(last)
console.log("empDetails: "+ empDetails[last-1])

// Modifying the array elements: by assigning a new value to their corresponding index

empDetails[0]="Apple"
console.log("empDetails: "+ empDetails[0])

// Inserting Values in an empty array

var webtech=[]
console.log(webtech)

webtech[0]=0
webtech[1]=10
webtech[2]=20
webtech[3]=30
webtech[4]=40
console.log(webtech)

// Array methods

// adding elements it array push()==> to add at last
                        //  unshift()==> add at start

                        var color=["red","blue"]
                        console.log(color)
                    
                        color.unshift("pink")
                        console.log(color)
                    // 
                        color.push("last adding")
                        console.log(color)

console.log("==========")                        
var color1=["blue","green","yellow","orange","black","white"]
console.log(color1)

color1.pop() // removes last element
console.log(color1)

color1.pop() // removes last element
console.log(color1)

color1.shift() // removes first element
console.log(color1)

color1.shift() // removes first element
console.log(color1)

color1.splice(1,2) // removes 2 elements from index 1
console.log(color1)

// Array length :length is not a method it is a property of array
var color2=["blue","green","yellow","orange","black","white"]
console.log(color2.length)
// increasing the length of array
color2.length=10
console.log(color2.length)
console.log(color2)
// decreasing the length of array
color2.length=3
console.log(color2.length)
console.log(color2)

// itrating the array elements using for loop
var roles=["admin","user","manager","developer"]
for(i=0;i<roles.length;i++){
    console.log(roles[i])
}