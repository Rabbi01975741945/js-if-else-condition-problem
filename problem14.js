const a = 3;
const b = 4;
const c = 15;
// use if else condition
if (a + b > c && b + c > a && a + c > b) {
  console.log("Valid");
} else {
  console.log("Not Valid");
}
//  use ternary operator and condition
const result = a + b > c && b + c > a && a + c > b ? 'valid':'Invalid';
console.log(result);
