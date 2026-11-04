function fun(){
    var bgColor=document.getElementById("color"),value;
    document.body.style.backgroundColor=bgColor;
}

//addeventlistner 

var bgColor=document.getElementById("color");
    bgColor.addEventListener("input",()=>{
        document.body.style.backgroundColor=bgColor.value;

    })
    
//PASSWORD ,<5 WEAKPASSWORD(RED)
// >=5 <8 average (blue)
// >=8,<=12 Strong(green)