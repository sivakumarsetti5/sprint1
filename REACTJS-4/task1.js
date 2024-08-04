// Create array with some random numbers.
// On that array, perform some operation with Array “every” method and “some” method.



// 1.By using 'every' method to check whether the all numbers of array are even or not
const arrayOfNum = [23,45,12,897,78,54]

function isEven(num){
    return num%2===0
}

const result1 = arrayOfNum.every(isEven)
console.log(result1)

//2.By using 'some' method to check whether atleast one of the item in the array is odd or not

function isOdd(num){
    return num%2!==0
}

const result2 = arrayOfNum.some(isOdd)
console.log(result2)
