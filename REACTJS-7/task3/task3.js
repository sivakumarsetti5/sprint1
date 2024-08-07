const arr= [[1,2],[3,4,[5,6,7]]]
//Write a function to create nested array into single dimensional array  without using predefined array method(flat)

function fnConvertToSDA(arr){
    let result = []
    function flatenArray(innerArray){
        for(let i of innerArray){
            if(Array.isArray(i)){
                flatenArray(i)
            }
            else{
                result.push(i)
            }
        }
    }
    flatenArray(arr)
    return result
}

const result=fnConvertToSDA(arr);
console.log(result)
// result should be [1,2,3,4,5,6,7]