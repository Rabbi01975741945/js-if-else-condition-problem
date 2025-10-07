const number = 10;
// use if else condition 
if(number === 0){
    console.log('This is zero');
}
else if(number > 0){
    console.log('this is positive number');
}else{
    console.log('this is negative number');
}
// use ternary condition
const result = number === 0 ? 'This is zero':  number > 0 ? 'This is positive number':'this is negative number';
console.log(result);