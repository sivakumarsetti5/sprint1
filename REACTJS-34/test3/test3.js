// JavaScript:

// Polyfill of indexOf method

const arr=[22,15,35,83]

const output1=arr.indexOf(35)
// output1 is 2

const output2=arr.indexOf(30)
// output2 is -1

//Can you create your own myIndexOf method , which should equally work like normal indexOf method.

Array.prototype.myIndexOf=(searchEle,startIndex)=>{

}

const output3=arr.myIndexOf(35)
// output is 2

const output4=arr.myIndexOf(30)
// output is -1
 