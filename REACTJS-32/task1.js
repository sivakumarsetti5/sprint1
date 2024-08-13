// Write a class which have two variables and methods ?

// One class using function keyword

function Student(){
    this.name='siva'
    this.age=27
    this.getMarks = function(){
        console.log('90/100')
    }
}

const obj = new Student()
console.log(obj)
console.log(obj.getMarks())

// One class using class keyword

class Car{
    leftSeats = 2;
    rightSeats = 2;
    getTotalSeats(){
        console.log(this.leftSeats+this.rightSeats)
    }
}
class Ferari extends Car{
    constructor(color,model){
          super()
          this.color = color;
          this.model=model;
    }
}    

const carObj = new Ferari('red','ferari123')
console.log(carObj)
//console.log(carObj.getTotalSeats())