const arr=[33,322,48,2,53,88,29,844,8,6,5]

// Write a function which should return smallest and largest number from array.

function findSmallAndLarge(input){
    const min = Math.min(...input)
    const max = Math.max(...input)
    return [min,max]
}
const [x,y]=findSmallAndLarge(arr);
console.log('Smallest Number:',x)
console.log('Largest Number:',y)

// x value should be 2
// y value should be 844