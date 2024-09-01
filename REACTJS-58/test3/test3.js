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
// Can you sort the above players on retiredOn property in ascending order ? 
// output should be  Lara,Sachin ,Pointing objects in the array

const result = players.sort((a,b)=>new Date(a.retiredOn)-new Date(b.retiredOn))
console.log(result)