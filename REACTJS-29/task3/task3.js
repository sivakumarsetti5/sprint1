// var obj1={
//     name:"Sachin"
//    }
// var obj2=obj1;
// obj2.name = 'Dhoni'
   
// Now obj2 name property value is Dhoni as well as obj1 name property value also get changed to Dhoni (you can check because of singleton behavior).
// But as per my requirement  o1 value should not change to Dhnoi , should be Sachin only.
// Can you write the code for that (at least 2 ways)

// Hint: We can do it by creating cloned object for o2 like below

// using Spread operator
var obj1={
     name:"Sachin"
   }
var obj2={...obj1,name:'Dhoni'}
console.log('Using Spread operator: ')
console.log(obj1)
console.log(obj2)

// using Object.assign()
var obj1={
    name:"Sachin"
   }
var obj2 = Object.assign({},obj1)
obj2.name = 'Dhoni'
console.log('using Object.assign():')
console.log(obj1)
console.log(obj2)


// using JSON.stringify and JSON.parse methods
var obj1={
    name:"Sachin"
   }
var obj2 = JSON.parse(JSON.stringify(obj1))
obj2.name = "Dhoni"
console.log('using JSON.stringify and JSON.parse methods:')   
console.log(obj1)
console.log(obj2)

