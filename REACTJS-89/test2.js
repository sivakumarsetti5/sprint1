// Write a functional class  to Implement Queue
class Queue{
    constructor(){
       this.items = [];
    }
    //add item in Queue
    enqueue(element){
        this.items.push(element)
    }

    //remove item in queue
    dequeue(){
        if(this.isEmpty()){
            return 'Queue is Empty'
        }else{
            return this.items.shift()
        }
    }
    // view the first element of the queue without removing it
    peek(){
        if(this.isEmpty()){
            return 'Queue is Empty'
        }else{
            return this.items[0]
        }
    }
    size(){
        return this.items.length
    }

    clear(){
        return this.items = []
    }


    //check if queue had items or not
    isEmpty(){
        return this.items.length === 0
    }


    printQueue(){
        return this.items.join(' ')
    }

}

const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.items)
queue.dequeue()
console.log(queue.isEmpty())
console.log(queue.printQueue())
console.log(queue.peek())
console.log(queue.size())
console.log(queue.clear())