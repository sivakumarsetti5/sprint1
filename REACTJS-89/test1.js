// Create a promise object which should return success response.
// Get that success response using then
// Another way using await keyword

const isLogedIn = false
const promiseObj = new Promise((resolve,reject)=>{
    isLogedIn ? resolve('Login Success') : reject('Login Failure')
})

//Using then method:
promiseObj.then(
    (success)=>console.log(success),
    (failure)=>console.log(failure)
)

// using await keyword
async function handleAsyncAwait(){
    try{
        const result = await promiseObj
         console.log(result)
     }catch(ex){
        console.log(ex)
     }
}
handleAsyncAwait()
