var array=[1,2,3,4,1,8,2,7,2,3,2,3,4,5,2]

function findMostFrequentElement(array){
    let frequency = {}
    let maxCount = 0
    let mostRepeatedElement;
    for (let i=0;i<array.length;i++){
        let element = array[i]
        if(frequency[element]){
            frequency[element]++
        }else{
            frequency[element] = 1
        }
        if(frequency[element]>maxCount){
            maxCount = frequency[element]
            mostRepeatedElement = element
        }
    }
    // console.log(frequency)
    return mostRepeatedElement

}

var result = findMostFrequentElement(array)
console.log(result)

//Output : 2

// Hint: Most repeated element in the array