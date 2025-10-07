const number1 = 40;
const number2 = 20;
const number3 = 30;
// use if else condition
if(number1 > number2 && number1 > number3){
    console.log('The largest number is:', number1);
}else if(number2 > number3 && number2 > number1){
    console.log('The largest number is:', number2);
    
}else{
    console.log('The largest number is:', number3);
}
// use ternary operator and condition
const result = number1 > number2 && number1 > number3 ? `The largest number is: ${number1}`:number2 > number1 && number2 > number3 ? `The largest number is: ${number3}`:`The largest number is: ${number3}`;
console.log(result);