// Write a function to return the given input in reverse order.

// Method1

function fnReturnReverse(input){
    let reverseValue = ''
    for(let i of input){
        reverseValue=i+reverseValue
    }
    return reverseValue;
}

console.log(fnReturnReverse("Sachin"))

// Method2

function fnReturnReverse(input){
    return input.split('').reverse().join('')
}

console.log(fnReturnReverse("Sachin"))

// Method 3

function fnReturnReverse(input){
    if(input===''){
        return ''
    }else{
        return fnReturnReverse(input.substr(1))+input.charAt(0)
    }   
}
console.log(fnReturnReverse("Sachin"))