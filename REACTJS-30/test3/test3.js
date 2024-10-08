const players=[
    {
    "name":"Sachin",
    "runs":20000,
    "loc":"Mumbia",
    "hun":100
    },
    {
    "name":"Dhoni",
    "runs":18000,
    "loc":"Ranchi",
    "hun":40
    },
    {
    "name":"Dravid",
    "runs":10000,
    "loc":"Banglore",
    "hun":32
    },
   {
    "name":"Kohli",
    "runs":19000,
    "loc":"Delhi",
    "hun":76
    },
]

// 1. to get the player object whose name is "Kohli"

const filterPlayerObj = players.filter(each=>each.name.toLowerCase()==='Kohli'.toLowerCase())
console.log(filterPlayerObj)

// 2. to get the players whose runs grater than 18000
const filterPlayerByRunsObj = players.filter(each=>each.runs>18000)
console.log(filterPlayerByRunsObj)

// 3. is All palyers Hit min one century - true/false
const isAllHadCent = players.every((each)=>each.hun>=1)
console.log(isAllHadCent)

// 4. Add one extra property to all players "fif", value is half of the hun property value.

const updatedPlayersList = players.map(each=>({...each,fif:Math.ceil(each.hun/2)}))
console.log(updatedPlayersList)