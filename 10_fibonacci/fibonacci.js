const fibonacci = function (n) {
    //checks if the arg is a number or note them apply fib 
    //fn = fn-1 + fn-2

    let num;
    if (typeof n !== "number") num = parseInt(n)
    else num = n

    if (num < 0) return "OOPS";
    if (num == 0) return 0;

    let first = 0;
    let second = 1;


    for (let i = 1; i <= num; i++) {
        nextTerm = first + second;
        first = second;
        second = nextTerm;
    }

    return first

};

console.log(fibonacci(4))

// Do not edit below this line
module.exports = fibonacci;
