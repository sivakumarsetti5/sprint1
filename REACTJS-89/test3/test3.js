let obj={n1:10,n2:20}
// obj.hasOwnProperty("n1") // true
// obj.hasOwnProperty("n3") // false

// hasOwnProperty is the predefined method inside the Object class. So can you write
// your own myHasOwnProperty method to perform the same operation.

 Object.prototype.myHasOwnProperty=function(props){
    for(let key in this){
        if(key===props && this[key]!==undefined && this.constructor.prototype[key]===undefined){
            return true
        }     
    }
    return false
}
const result = obj.myHasOwnProperty("n2") // true
console.log(result)
// obj.myHasOwnProperty("n3") // false


