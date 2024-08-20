// Find the Intersection of Two Arrays:

const arr1=[1,2,3,4,5]
const arr2=[3,4,5,6,7]

const intersectionOfArray = arr1.filter((each)=>arr2.includes(each))
console.log(intersectionOfArray)