const isVowel = 'a';
if(isVowel === 'a' || isVowel === 'e' || isVowel === 'i' || isVowel === 'o' || isVowel === 'u'){
    console.log('Vowel');
}else{
    console.log('Constant');
}
// use ternary operator and condition
const result = isVowel === 'a' || isVowel === 'e' || isVowel === 'i' || isVowel === 'o' || isVowel === 'u' ? 'Vowel':'Constant';
console.log(result);