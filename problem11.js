const num = 10; 
// use if else condition
if (num % 3 === 0 && num % 7 === 0) {
    console.log("Multiple of both 3 and 7");
} else if (num % 3 === 0) {
    console.log("Multiple of 3");
} else if (num % 7 === 0) {
    console.log("Multiple of 7");
} else {
    console.log("Not a multiple of 3 or 7");
}
// use ternary operator and condition
const result = num % 3 === 0 && num % 7 === 0 ? 'Multiple of both 3 and 7':num % 3 === 0 ? 'Multiple of 3':num % 7 === 0 ? 'Multiple of 7': 'Not a multiple of 3 or 7';
console.log(result);
