// Write a function to find Largest Number Among Three Numbers ?

function fn(...nums){
    let largest = nums[0]
    for(let number of nums){
        if(number>largest){
            largest=number
        }
    }
    return largest
    
}

console.log(fn(10,100,33))