
// 1. Use a named function to accept student name and display it after 3 seconds using setTimeout function

// 2.use an annonymous function to calucate the total marks of 3 subjects

// 3. Use an arrow function to calucate average marks

// 4. Use a IIFE function to display "Student result Processing Started" message

// 5. Use a callback function to check weather the student passed or failed based on the average marks (>=35 student passed. else student failed)

// 6. Use a higher order function to accept the callback and display the result

// condition
// Student name: charan
// webtech=80
// java=90
// sql=100
// pass marks=35

// Output:
// Student result processing started
// Student name: charan
// Total marks: 270
// Average marks: 90
// Student passed


(()=>{console.log("Student result processing started")})();

setTimeout(function StudentName(){
    console.log("Student name: charan");

let totalMarks = (s1, s2, s3)=>{
    return s1 + s2 + s3;
};
var total=totalMarks(80, 90, 100);
console.log("Total marks: " + total);

let averageMarks = (total, subjects) => {
    return total / subjects;
}
var average=averageMarks(total, 3)
console.log("Average marks: " + average);

function resultstd(average) {
    if (average >= 35) {
        return "Student passed";
    } else {
        return "Student failed";
    }
}
function checkResult(callback) {
    console.log(callback(average));
}
checkResult(resultstd)


}, 5000);

