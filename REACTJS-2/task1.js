//Create one array with some random numbers(>100 and <100) 
//and Want the numbers only >100 using filter array method.


const arrayOfNumbers = [120,234,345,24,36,89,45,64,675]

function filterNumbersGreaterThan100(array){
    return array.filter(eachNumber=>eachNumber>100)
}


const filteredNumbers = filterNumbersGreaterThan100(arrayOfNumbers)
console.log(filteredNumbers)