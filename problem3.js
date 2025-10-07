const number1 = 40;
const number2 = 20;
// use if else condition
if(number1 > number2){
    console.log('The biggest number is:', number1);
}else{
    console.log('The biggest number is:', number2);
}
// use ternary operator and condition
const result = number1 > number2 ? `The biggest number is: ${number1}`:`The biggest number is: ${number2}`;
console.log(result);