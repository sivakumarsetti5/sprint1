// Write a functional class , which should inherit one variable and method.

class Student {
    constructor(name,age){
         this.name=name;
         this.age=age;
    }
    getCollegeName(){
        return 'Sir C R Reddy College of Engineering'
    }
}
class Std1 extends Student{
      constructor(name,age){
        super(name)
      }
}

const obj1 = new Std1("sivakumar",26)
console.log(obj1.getCollegeName())
console.log(obj1.name)