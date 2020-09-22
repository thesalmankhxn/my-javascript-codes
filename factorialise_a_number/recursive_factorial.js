const factorial = s => {
    if (s === 0){
        return 1;
    }
    return s * factorial(s-1);
}

console.log(factorial(5));