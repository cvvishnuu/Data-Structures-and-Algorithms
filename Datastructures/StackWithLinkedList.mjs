class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    peekBottom() {
        return this.bottom;
    }

    push(value) {
        const node = new Node(value);
        if(this.length === 0) {
            this.top = node;
            this.bottom = node
        } else {
            const temp = this.top
            this.top = node  
            this.top.next = temp 
        }
        this.length++
        return this        
    }

    pop() {       
        if(!this.top) {
            return null
        }   
        const node = this.top
        this.top = this.top.next
        this.length--
        return node;
    }

    isEmpty() {
        if(this.bottom) {
            return false
        }
        return true
    }

}

// const myStack = new Stack() 
// myStack.push(5);
// myStack.push(10);
// myStack.push(15);
// myStack.push(20);



// myStack.push(20);
// myStack.push(15);
// myStack.push("discord");
// console.log(myStack.pop())
// console.log(myStack.peek())


export default Stack;