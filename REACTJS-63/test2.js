// Write a function  to count the Number of Vowels in the given string.

const vowels = ['A','E','I','O','U']
function findVowelsCount(input){
    let count = 0
    for(let i of input){
        if(vowels.includes(i.toUpperCase())){
            count++
        }
    }
    return count
}

const result = findVowelsCount("nit") 
console.log(result)
