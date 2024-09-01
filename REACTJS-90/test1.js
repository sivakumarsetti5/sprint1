// Write a function to swap to variables

//Using Temporary variable
function swap1(a,b){
    let x = a
    a = b
    b = x
    return [a,b]
}

console.log(swap1(10,20))

// destructuring Assignment

function swap2(a,b){
    [a,b] = [b,a]
    return [a,b]
}
console.log(swap2(40,50))

//Arthamatic operation

function swap3(a,b){
    a = a+b    //130
    b = a-b    //60
    a = a-b    //70
    return [a,b]
}
console.log(swap3(60,70))

//XOR bitwise

function swap4(a,b){
    a = a^b    
    b = a^b    
    a = a^b    
    return [a,b]
}
console.log(swap4(5,10))