// Create a promise object which should return success response.
// One way , by creating object to Promise class object
// Another way using resolve static method.


//1. by creating object to Promise class object 

function isEven(num){
    return new Promise (function(resolve,reject){
        if(num%2===0){
            resolve('even')
        }else{
            reject('odd')
        }
    })
}

isEven(10).then((success)=>console.log(success),(failure)=>console.log(failure))

//2.Using resolve static method:

const promiseWithResolve = Promise.resolve('Hello World')
promiseWithResolve.then((success)=>console.log(success))