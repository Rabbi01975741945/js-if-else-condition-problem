const costPrice = 100;
const selPrice = 150;
// use if else condition
if(costPrice < selPrice){
    console.log('profit');
}else{
    console.log('loss')
}
//  use ternary operator and condition
const result = costPrice < selPrice ? 'profit':'loss';
console.log(result);