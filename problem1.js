const number = 7;

// if else
    if(number % 2 === 0){
        console.log(`Even number is: ${number}`);
    }else{
        console.log(`Odd number is: ${number}`)
    }
    // use ternary operator
    const result = number % 2 === 0 ? `Even Number is: ${number}`:`Odd number is: ${number}`;
    console.log(result);