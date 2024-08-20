// https://kalamschools.com/#/react-programs?name=print
// JavaScript:
// Polyfill of filter method
const arr=[22,15,35,83]
// const output=arr.filter((val,ind)=>{
//    return val>30
// });
// output is [35,83]


// Can you create your own myFilter method , which should equally work like normal filter method.
Array.prototype.myFilter = function(callback) {
    const result = [];
    //console.log(callback())
    for (let i = 0; i < this.length; i++) {
        // console.log(this)
      if (callback(this[i], i, this)) {
        result.push(this[i]);
      }
    }
  
    return result;
  };
  
const result=arr.myFilter((val,ind)=>{
   return val>30
});
console.log(result)
// result should be [35,83]