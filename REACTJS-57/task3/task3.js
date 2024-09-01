const players=[
             {
                 name:"Sachin",
                 runs:20000,
                 retiredOn:"03-10-2010"
             },
             {
                 name:"Pointing",
                 runs:16000,
                 retiredOn:"01-01-2015"
             },
             {
                 name:"Lara",
                 runs:19000,
                 retiredOn:"02-07-2005"
             }
            
         ]
// Can you sort the above players on runs in ascending order ? 
// output should be  Pointing, Lara, Sachin objects in the array

const result = players.sort((a,b)=>a.runs - b.runs)
console.log(result)