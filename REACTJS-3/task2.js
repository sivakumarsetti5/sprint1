//Write a function to check, the given number is prime or not?

function isPrimeNumber(num) {
    if (num < 2) {
        return 'Not a Prime Number';
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return 'Not a Prime Number';
        }
    }
    return 'Prime Number';
}

var result = isPrimeNumber(13);
console.log(result)