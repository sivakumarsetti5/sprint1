// Write an example code snippet about call and apply methods.

const student = {
    getInfo:function(name,cgpa){
        return `This is ${name} with cgpa ${cgpa} from ${this.name},${this.location}`
    }
}

const college = {
    name:'C R Reddy college of Engineering',
    location:'Eluru'
}

const resultByCallMethod = student.getInfo.call(college,'sivakumar',7.37)
console.log(resultByCallMethod)

const resultByApplyMethod = student.getInfo.apply(college,['praveen',8.5,])
console.log(resultByApplyMethod)