const year = 2020;
// use if else condition
if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
    console.log('leap year');
}else{
    console.log('not leap year');
}
// use ternary operator and condition
const result = ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? 'leap year':'not leap year';
console.log(result);