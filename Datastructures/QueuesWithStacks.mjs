class QueueWithStacks {
    constructor() {
        this. first = []
        this.last = []
    }

    enqueue(value) {
        const size = this.first.length;
        for(let i = 0; i < size; i++) {
            this.last.push(this.first.pop())
        }
        this.last.push(value)
        return this;
    }

    dequeue() {
        const size = this.last.length;
        for(let i = 0; i < size; i++) {
            this.first.push(this.last.pop())
        }
        this.first.pop()
        return this;
    }

    peek() {
        if(this.last.length > 0) return this.last[0]
        return this.first[this.first.length - 1]
    }
}

// const myQueue = new QueueWithStacks()

// console.log(myQueue.enqueue(1))
// console.log(myQueue.enqueue(2))
// console.log(myQueue.peek())
// console.log(myQueue.dequeue())
// console.log(myQueue.peek())
// console.log(myQueue.enqueue(1))
// console.log(myQueue.peek())
// console.log(myQueue.dequeue())
// console.log(myQueue.peek())

export default QueueWithStacks;