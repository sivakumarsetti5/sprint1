// Polyfill of find method

const arr=[22,15,35,83]
const output=arr.find((val,ind,oa)=>{
  return val==35
});
// output is 35

// Can you create your own myFind method , which should equally work like normal find method.

Array.prototype.myFind=()=>{
}

const result=arr.myFind((val,ind,oa)=>{

  return val==35

});

// result should be 35