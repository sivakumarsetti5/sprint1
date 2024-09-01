// Write a program to generate a following structure:

// 1.

// 1
// 2 3
// 4 5 6
// 7 8 9 10

let count = 1
for(let i=1;i<=4;i++){
   let row = ''
    for(let j=1;j<=i;j++){
        row += count + ' '
        count++
    }
    console.log(row)
}

// 2.

// A
// B B
// C C C
// D D D D

let alpha ='ABCD'
for(i=0;i<alpha.length;i++){
    console.log((alpha[i]+' ').repeat(i+1))
}

// 3.

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
// 4 4 4 4
// 3 3 3
// 2 2
// 1 

for (let i=1;i<10;i++){
    if(i<=5){
        console.log((String(i)+' ').repeat(i))
    }else{
        console.log((String(10-i)+' ').repeat(10-i))
    }
}