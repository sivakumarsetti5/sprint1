// Write a recursive function to calculate the factorial of a given number. 

const n = 5

function factorial(n){
    if(n<=1){
        return 1
    }
    return n*factorial(n-1)
}

const result = factorial(n)
console.log(result)