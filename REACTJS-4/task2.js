// Write a function to find the factors(count) of given number.

function fnFindFactors(no){
    let count = 0
    for(let i=1;i<=no;i++){
        if(no%i===0){
            count++
        }
    }
    return count
}

var result = fnFindFactors(6)
console.log(result)