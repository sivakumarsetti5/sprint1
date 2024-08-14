// Prepare Data representation for
// 1. 3 players
// 2. Each player has name, runs loc.
// Prepare Data representation for one student,
//the property values should cover all the data types(string,number,boolean,array, object, function)

const playersList = [
    {
        name:'sivakumar setti',
        age:27,
        isMarried:false,
        scores:[23,56,78,99,25],
        huns:{
            odi:45,
            test:23,
            t20:10
        },
        sumOfScores:function(){
            return this.scores.reduce((a,b)=>a+b)
        }
    },{
        name:'saikumar setti',
        age:26,
        isMarried:false,
        scores:[32,65,89,99,1],
        huns:{
            odi:23,
            test:14,
            t20:1
        },
        sumOfScores:function(){
            return this.scores.reduce((a,b)=>a+b)
        }
    },{
        name:'sateesh kumar setti',
        age:30,
        isMarried:false,
        scores:[23,56,78,99,25],
        huns:{
            odi:45,
            test:23,
            t20:10
        },
        sumOfScores:function(){
            return this.scores.reduce((a,b)=>a+b)
        }
    }
]
console.log(playersList)