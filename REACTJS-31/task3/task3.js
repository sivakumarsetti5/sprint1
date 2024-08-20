//Polyfill of map method

const arr=[22,15,35,83]

const output=arr.map((val,ind)=>{
    return val+10
});

//output is [32,25,45,93]

// Can you create your own myMap method , which should equally work like normal map method.

Array.prototype. myMap=()=>{
    
}
const result=arr.myMap((val,ind)=>{
    return val+10
});

// result should be [32,25,45,93]