// Write a program to generate a following structure:

// 1. 
// 12345
// 12345
// 12345
// 12345
// 12345
console.log('structure 1:')

const result1 = Array.from({length:5},(_,i)=>i+1).join('');
for(let i=1;i<=5;i++){
    console.log(result1)
}
// 2.
// 54321
// 54321
// 54321
// 54321
// 54321 
console.log('structure 2:')
const result2 = Array.from({length:5},(_,i)=>5-i).join('')
for(let i=1;i<=5;i++){
    console.log(result2)
}
// 3.
// 55555
// 44444
// 33333
// 22222
// 11111

console.log('structure 3:')
for(let j=5;j>0;j--){
    let result = ''
    for(let i=1;i<=5;i++){
        result=result+j
    }
    console.log(result)
}