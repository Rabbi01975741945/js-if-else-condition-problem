const num = 153; 


const digit1 = Math.floor(num / 100);
const digit2 = Math.floor((num % 100) / 10); 
const digit3 = num % 10; 


const sum = (digit1 ** 3) + (digit2 ** 3) + (digit3 ** 3);


// use if else condition
if (sum === num) {
    console.log("Armstrong");
} else {
    console.log("Not Armstrong");
}
// use ternary operator and condition
const result = sum === num ? 'Armstrong':'Not Armstrong';
console.log(result);
