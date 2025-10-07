const num = -8; 

let absoluteValue;

if (num < 0) {
    absoluteValue = num * -1;
} else {
    absoluteValue = num;
}

console.log(absoluteValue);
// use ternary operator and condition
const result = num < 0 ? absoluteValue = num * -1: absoluteValue = num;
console.log(result);
