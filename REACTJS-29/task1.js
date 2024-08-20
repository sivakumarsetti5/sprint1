// task1:
// Create a array with some rando numbers
// On that array perform insert, update, delete operations on any position using splice method.


const array = [34,6,4,78,2,90,89,45]

//using splice method:
//syntax:  array.splice(startIndex,no.of items to delete,adding items)

//insert items
array.splice(2,0,100,200)
console.log('After insert:',array)

// update items
array.splice(1,2,400,500)
console.log('After update:',array)

//delete items
array.splice(2,3)
console.log('After delete:',array)

// task2:
// Create on JSON variable with out any properties.
// Perform insert, update, delete  and retrieve operations on the above variable.

const jsonObj = {}

console.log('Empty json',jsonObj)

//insert operation

jsonObj.name = 'sivakumar'
jsonObj.age = 26

console.log('After insert operation',jsonObj)

//update operation

jsonObj.name = 'sivakumar setti'
console.log('After updateOperation',jsonObj)

//retrive operation
console.log(jsonObj.name)

//delete operation

delete jsonObj.age

console.log('After delete operation',jsonObj)