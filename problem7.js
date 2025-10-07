const number = 25;
// use if else condition
if(number % 5 === 0 && number % 11 === 0){
    console.log('Divisible');
}else{
    console.log('Not Divisible');
}
// use ternary operator and condition
const result = number % 5 === 0 && number % 11 === 0 ? 'Divisible':'Not Divisible';
console.log(result);