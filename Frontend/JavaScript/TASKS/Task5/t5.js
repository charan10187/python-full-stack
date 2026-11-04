//PASSWORD ,<5 WEAKPASSWORD(RED)
// >=5 <8 average (blue)
// >=8,<=12 Strong(green)
function psw(){
    result=length(uspfl);
    if(result<5){
        document.body.style.backgroundColor=red;
    }
    if(result>=5 || result<8){
        document.body.style.backgroundColor=blue;
    }
    if(result>=8 || result<=12){
        document.body.style.backgroundColor=green;
    }
}