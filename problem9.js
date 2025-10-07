const string ='a';
// use if else condition
if(string === string.toUpperCase()){
    console.log('UpperCase');
}else{
    console.log('LowerCase');
}
// use ternary operator and condition
const result = string === string.toUpperCase() ? 'UpperCase':'LowerCase';
console.log(result);