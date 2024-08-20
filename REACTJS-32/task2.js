// Find the Union of Two Arrays:
const arr1=[1,2,3,4,5]
const arr2=[3,4,5,6,7]

function unionOfArrays(arr1,arr2){
    return [...new Set([...arr1,...arr2])]
}

const union = unionOfArrays(arr1,arr2)
console.log(union)