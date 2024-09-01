// Can you reproduce the error “cann"t read property of undefined (reading length)”
// Can you handle the above exception using try, catch, finally

var string;
try{
    console.log(string.length)
}catch(ex){
    console.log(ex.message)
}finally{
    console.log('this will excuited whether it is handled or not')
}
