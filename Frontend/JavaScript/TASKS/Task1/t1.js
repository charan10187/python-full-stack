

var firstname     = prompt("First Name");
console.log("First Name:", firstname);
document.getElementById("firstname").textContent     = firstname;

var lastname      = prompt("Last Name");
console.log("Last Name:", lastname);
document.getElementById("lastname").textContent      = lastname;

var mobilenum     = prompt("Mobile Number");
console.log("Mobile Number:", mobilenum);
document.getElementById("mobile").textContent        = mobilenum;

var qualification = prompt("Qualification");
console.log("Qualification:", qualification);
document.getElementById("qualification").textContent = qualification;

var address       = prompt("Address");
console.log("Address:", address);
document.getElementById("address").textContent       = address;

var jobstatus     = prompt("Job Status");
console.log("Job Status:", jobstatus);
document.getElementById("jobstatus").textContent     = jobstatus;


// show the table only after all data is entered
document.getElementById("student-table").style.display = "table";