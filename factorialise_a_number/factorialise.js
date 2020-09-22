const factorial = s => {
    let num = 1;
    for (let i = 1; i <= s; i++){
        num *= i;
    }
    return num;
};

console.log(factorial(5));