// Can you create your own exception class ?
// Write a sample code to throw the above exception using throw keyword.
class SalaryError extends Error{
    constructor(message){
        super(message)
            this.name = 'SalaryError'
        
    }
}
var salary = -1000

try{
    if(salary<0){
        throw new SalaryError('Salary cannot be negative')
    }
    console.log(salary)
}
catch(ex){
    console.log(ex.name,ex.message)
}
finally{
    console.log('done')
}