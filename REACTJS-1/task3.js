var obj1={n1:10,n2:20}
var obj2={n1:10,n2:20}

// obj1===obj2 answer is false 
// But we need a function to get the output is true  like below

function equals(obj1,obj2){
   if(Object.keys(obj1).length !== Object.keys(obj2).length){
       return false
   }
    for(let i of Object.keys(obj1)){
        if(obj1[i]!==obj2[i]){
            return false
        }
      }
   return true
}
console.log(equals(obj1,obj2))