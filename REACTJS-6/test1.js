// Create an array with 10 random numbers.
// Implement pagination.
// Each page has 2 numbers.
// If page no is 1: return 1st 2 numbers, page no 3 : return 4 to 6 numbers  like that.

const arrOfRandomNum = Array.from({length:10},()=>Math.floor(Math.random()*100))
const pageSize = 2

// console.log(arrOfRandomNum)

function paginationOfArr(array,pageNumber,pageSize){
    let firstIndex = (pageNumber-1)*pageSize
    let lastIndex = firstIndex+pageSize
    return array.slice(firstIndex,lastIndex)
}

function getAllPages(array,pageSize){
    let allPages = []
    let pageLenght = Math.ceil(array.length/pageSize)
    for(let i=1;i<=pageLenght;i++){
        allPages.push(paginationOfArr(array,i))
    }
    return allPages
}

const result = getAllPages(arrOfRandomNum,pageSize)
// console.log(result)
result.forEach((ele,i)=>{
       console.log(`Page ${i+1}:`,ele)
})
