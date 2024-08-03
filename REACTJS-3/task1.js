// 1.Create an array with some random numbers.
// 2.And then sort the numbers in Ascending order using  Array class sort method.

const arrayOfNum = [34,67,123,3,56,87,190]

arrayOfNum.sort((a,b)=>a-b)

console.log(arrayOfNum)


// =====================================================================================


// 1.Create a variable with array of objects (3 objects, object should have name, runs, loc properties).
// 2.Add “hun” property to all objects with some value using Array class map method.
// 3.So finally the output should be array of 3 objects and every object should have name, runs, loc, hun.

const arrayOfObj = [
    { 
        name:'sivakumar',
        runs:20000,
        loc:'Vishakapattanam'
    },
    { 
        name:'Sathwik',
        runs:15000,
        loc:'Hyderabad'
    },
    { 
        name:'Deekshith',
        runs:10000,
        loc:'Vijayawada'
    },
]

//Add 'hun' property to all objects using map method
const numOfHuns = [30,23,15]
 updatedArray = arrayOfObj.map((obj,i)=>({...obj,hun:numOfHuns[i]}))
console.log(updatedArray)