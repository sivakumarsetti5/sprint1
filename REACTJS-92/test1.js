// Create an async function and return some value.
// Get the return value using then
// Another way using await keyword


const str = "Hello World !!!"
const promiseObj = new Promise((resolve,reject)=>{
      resolve(str)
})
promiseObj.then((s)=>console.log('Using then:',s))


const handlePromise = async () =>{
      const result = await promiseObj 
      console.log('Using await:',result)
}
handlePromise()
