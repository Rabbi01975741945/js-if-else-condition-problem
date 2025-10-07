const num1 = 10;  
const num2 = 5;   
const operator = '+';  

let result;
// use if else condition
if (operator === '+') {
    result = num1 + num2;
} else if (operator === '-') {
    result = num1 - num2;
} else if (operator === '*') {
    result = num1 * num2;
} else if (operator === '/') {
    result = num1 / num2;
} else {
    console.log("Invalid operator");
}

console.log(result);
// use ternary operator and condition
const output = operator === '+' ? result = num1 + num2 : operator === '-' ? result = num1 - num2 : operator === '*' ? result = num1*num2 : operator === '/' ? result = num1 / num2 : 'Invalid operator';
console.log(output);
