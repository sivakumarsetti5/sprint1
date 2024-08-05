var arr1=[10,20,30,40]

var arr2=[10,20,30,40]

// console.log(arr1==arr2)  //- false (reference comparison)

// So write a function to check the two arrays are equal or not (content comparison)

function equals(val1,val2){
    if(val1.length !== val2.length){
        return false
    }
    return val1.every((value,index)=>value===val2[index])
}

console.log(equals(arr1,arr2))

// Ans: true