// Write a function to find the Average of 6 subjects(array) of marks(out of 100): .

function findAverage(marks){
    const noOfSub = marks.length
    let sum = 0
    for(let mark of marks){
        sum+=mark
    }
    const average = sum/noOfSub
    return average
}

console.log(findAverage([80,75,99,88,50,44]))