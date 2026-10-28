var fun=function(){
    console.log("It is an nameless function")
}
fun()
//here we need to call by the identifiername in the above identifiername is  fun()
/*=====================================================================================================================*/
var pageLoad = function(){
    window.alert("page load")
}
// pageLoad()
/*=====================================================================================================================*/

var add=function(a,b){
    console.log(a+b);
}
add(5,6)
/*=======================================================================================================================*/

var totalAmount=function(price,quantity){
    console.log(price*quantity)
}
totalAmount(156,8)
/*=====================================================================================================================*/

var sub=function(aa,bb){
    console.log(aa-bb);
}
sub(5,6)
/*---------------------------------------------------------------------------------------------------------------------*/
console.log(sub(x=10,y=8))
console.log(x-y);

/*=====================================================================================================================*/
//                                Login Validation using named function

function isUsserValid(userName,password){
    if(userName==="Indrajit" && password==="1234"){
        console.log("valid and login sucesfull")
    }
    else{
       console.log("Not a valid username and password ") 
    }
}
isUsserValid("Indrajit","1234")

/*=====================================================================================================================*/
//                                Login Validation using named anonyomus unction


var isUsserValid = function(userName,password){
    if(userName==="Indrajit" && password==="1234"){
        console.log("valid and login sucesfull")
    }
    else{
       console.log("Not a valid username and password ") 
    }
}
isUsserValid("indrajit","1234")

/*=====================================================================================================================*/

/*Return Type*/

var isUserValid =function(username,password){
    return username === "indra" && password==="852"
}
console.log(isUserValid("indra","852"));


/*=====================================================================================================================*/

//Anonymous ob

document.getElementById("btn").onclick=function(){
    alert("button clicked")
}


/*=====================================================================================================================*/
//Anonymous fuction withous parameter but return type
var date=function(){
    return new Date()
}
console.log(date());
 /*=====================================================================================================================*/

 setTimeout(function(){
    console.log("hi after 5 sec");
 },1)//5000)

        /*=====================================================================================================================*/
//Find Maximum value

var  max= function(num1,num2){
    return num1 > num2
}
console.log(max(20,10))

/*=====================================================================================================================*/
var type= function(num){
    if(num%2==0){
        console.log("even no")
    }
    else{
        console.log("odd num")
    }
}
type(81)
/*=====================================================================================================================*/









































