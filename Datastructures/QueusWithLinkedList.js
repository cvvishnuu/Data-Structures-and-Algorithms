class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(value) {
        const node = new Node(value);
        if(!this.length) {
            this.first = node;
            this.last = this.first;
            this.length++
        } else {
            this.last.next = node;
            this.last = node;
            this.length++
        }
    }

    dequeue() {
        const node = this.first;
        this.first = this.first.next;
        this.length--
        return node.value;
    }

    peek() {
        if(this.length) {
            return this.first.value;
        }
        return 'empty'
        
    }

    size() {
        return this.length;
    }
}

const myQueue = new Queue()

myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
console.log(myQueue.peek())
myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)
console.log(myQueue.peek())
console.log(myQueue.size())