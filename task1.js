//Write a function , which should take 2 parameters with function type and return one more function

function fn(fun1,fun2){
    return(
        function(a,b){
            return (
                {sum:fun1(a,b),sub:fun2(a,b)}
            )
        }
    )

}
function add(a,b){
    return a+b
}
function sub(a,b){
     return a-b
}

var arthematicOperation = fn(add,sub)
var result = arthematicOperation(10,20)
console.log(result)
