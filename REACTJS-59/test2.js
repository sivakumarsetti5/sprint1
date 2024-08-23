// Write a program to generate a following structure:

// 1.

// 123456654321
// 1234554321
// 12344321
// 123321
// 1221
// 11

// method1:

function printNum(num){
    return Array.from({length:num},(_,i)=>i+1).join('')
}
function printReverse(num){
    return Array.from({length:num},(_,i)=>num-i).join('')
}

for (let i=6;i>0;i--){
    console.log(printNum(i)+printReverse(i))
}
//method2:
for (let i=6;i>0;i--){
    let result = ''
    for(let j=1;j<=i;j++){
        result+=j
    }
    for(let j=i;j>=1;j--){
        result+=j
    }
    console.log(result)
}


// 2.
// ABCDEFFEDCBA
// ABCDEEDCBA
// ABCDDCBA
// ABCCBA
// ABBA
// AA

const string = 'ABCDEF'

//method1:

for(let i=string.length;i>0;i--){
    let result1 = ''
    for(let j=0;j<i;j++){
         result1+=string[j]
    }
    for(let j=i-1;j>=0;j--){
        result1+=string[j]
    }
    console.log(result1)
}

//Method:2

for(let i=string.length;i>0;i--){
    const firstPart = string.slice(0,i)
    const secondPart = [...firstPart].reverse().join('')
    console.log(firstPart+secondPart)
}