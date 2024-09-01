// Find the Maximum Occurring Character in a String:

function maxOccurringChar(str) {
    let charObj = {}
    let maxChar = ''
    let maxCount = 0

    for(let i of str){
        charObj[i] = (charObj[i] || 0) + 1
        if(charObj[i] > maxCount){
            maxChar = i 
            maxCount = charObj[i]
        }
    }
    return maxChar
}
let text = "hello world";
const result = maxOccurringChar(text)
console.log(result)
