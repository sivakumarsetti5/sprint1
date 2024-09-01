// Write a function which returns a promise object with success response?
// Write a code snippet, from the above promise object, get the success data ?

function handlePromiseObj(){
    return new Promise((resolve,reject)=>{
        let data = 'Hi Sivakumar,Good Morning'
        if(data){
            resolve(data)
        }else{
            reject('No Data')
        }
    })  
}

handlePromiseObj().then((s)=>console.log(s),(e)=>console.log(e))

async function result1(){
    try{
        const res = await handlePromiseObj()
        console.log(res)
    }catch(e){
        console.log(e)
    }
    
}

result1()
// Write a function to stort the number in the given input array ?

function sort(input){
    const sortArray = input.sort((a,b)=>a-b)
    return sortArray
}

const result = sort([1,22,11,33,2,44]) 
console.log(result)
// [1,2,11,22,33,44]