// Write a function that generates a random alphanumeric string of a given length. 
const lenOfStr = 5
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'

function getAlphaNumericString(l){
    let string = ''
    for(let i=0;i<=l;i++){
        let index = Math.floor(Math.random()*chars.length)
        string +=chars[index]
    }
    return string
}
const result = getAlphaNumericString(lenOfStr)
console.log(result)