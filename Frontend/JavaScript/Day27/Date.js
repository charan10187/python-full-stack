// date constructor: by using date constructor we have to create date object. we can create date object by using new Date() constructor. it will create date object with current date and time. we can also create date object by passing date string or date values to the constructor.


console.log(Date());

function dateTime(){
    var date=new Date()
    console.log(date);
    // to get time 

    var hh=date.getHours()
    var mi=date.getMinutes()
    var ss=date.getSeconds()
    var ms=date.getMilliseconds()

    console.log(hh,mi,ss,ms);

    var dd=date.getDate()
    var mm=date.getMonth()
    var yy=date.getFullYear()

    console.log(dd,mm,yy)

    var day=date.getDay()
    var fullday=["SUN","MON","TUE","WED","THU","FRI","SAT"]
        console.log(fullday[day])



    // to get 12 hours 

    var AM_PM="AM"

    if(hh>12){
        AM_PM="PM"
        hh-=12
    }
    if(hh==0){
        hh=12
    }
    console.log(AM_PM)

    document.getElementById("time").innerHTML=`${hh}:${mi}:${ss}:${AM_PM}`
    document.getElementById("Date").innerHTML=`${dd}/${mm}/${yy}`
    document.getElementById("day").innerHTML=`${fullday[day]}`


}
// dateTime()
// setInterval(dateTime,1000);

function OTP(){

    sentOTP=(Math.floor(Math.random() * 9000) + 1000);
    console.log(sentOTP)
}
OTP()

var input=document.querySelector()