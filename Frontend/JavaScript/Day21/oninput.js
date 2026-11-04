function fun(){
    var bgColor=document.getElementById("Color"),value;
    document.body.style.backgroundColor=bgColor;
}

//addeventlistner 

var bgColor=document.getElementById("Color");
    bgColor.addEventListener("input",()=>{
        document.body.style.backgroundColor=bgColor.value;

    })
    

