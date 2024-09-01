// Write a function  to find the sum of natural numbers using recursion

function findSum(num) {
   // have to call findSum inside this function
   if(num===1){
    return 1
   }
   return num+findSum(num-1)
}

const result = findSum(10) // 1 to 10 numbers sum 
console.log(result)