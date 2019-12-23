function calcFactorial(number) {    
    if (number === 0) return 1;
    else return number * calcFactorial(number - 1);
}

function calcFactorialNonRecursive(number) {
    let sum = number;
    let isValidNumber = true;

    while(isValidNumber) {
        if(number === 1) isValidNumber = false;
        if ((number - 1) === 0) break;

        sum *= number - 1;
        number-= 1;
    }
    return sum;
}


const result = calcFactorial(6);
console.log(result);
// const result2 = calcFactorialNonRecursive(5);
// console.log(result2);
