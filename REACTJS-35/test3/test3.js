// Polyfill of slice method
const playerName="Sachin"

const output1= playerName.slice()
// output is "Sachin"

const output2=playerName.slice(2)
//output is "chin"

const output3=playerName.slice(2,4)
// output is "ch"

//Can you create your own mySlice method , which should equally work like normal slice method.

String.prototype.mySlice=(start,end)=>{

}

const output4=playerName.mySlice()
//output is "Sachin"

const output5=playerName.mySlice(2)
//output is "chin"

const output6=playerName.mySlice(2,4)
//output is "ch"