const marks = 49; // You can change this value
// use if else condition
if (marks >= 90) {
    console.log("Excellent");
} else if (marks >= 75) {
    console.log("Very Good");
} else if (marks >= 50) {
    console.log("Average");
} else {
    console.log("Needs Improvement");
}
// use ternary operator and condition
const result = marks >= 90 ? 'Excellent':marks >= 75 ? 'Very Good': marks >= 50 ? 'Average':'Needs Improvment';
console.log(result);