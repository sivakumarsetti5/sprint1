// Write a function to find the sum of elements in the array.

function fnFindSum(input){
    let sum = 0;
    for(let i of input){
        sum+=i
    }

    return sum;
}

console.log(fnFindSum([10,20,30]))
