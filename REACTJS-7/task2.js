//Write a function to find the given number is armstrong number or not .
//Note: Number that is equal to the sum of cubes of its digits is called armstrong.

function fnCheck(no){
    const noInString = String(no)
    let sum = 0
    for(let i of noInString){
        sum+=parseInt(i)**3
    }
    return sum === no ? 'Armstrong Number' : 'Not Armstrong Number';
}

console.log(fnCheck(153))


