class Node{
    constructor(value) {
        this.value = value,
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++       
    }

    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }
    
    remove(index) {
        if(index === 0) {
            this.head = this.head.next
            this.length--
            return this.printList()
        } else if(index >= this.length){
            let currentNode = this.head;
            let i = 1
            while(i < this.length) {
                currentNode = currentNode.next;
                i++
            }
            currentNode.next = null
            this.tail = currentNode; 
            this.length--
            return this.printList()         
        } else {
            let currentNode = this.head;
            let i = 1
            while(i < index) {
                currentNode = currentNode.next;
                i++
            }
            currentNode.next = currentNode.next.next;
            this.length--
            return this.printList()
        }
    }

    insert(index, value) {        
        if(index === 0) {
            this.prepend(value)
        } else if (index >= this.length) {
            this.append(value)
        } else {
            const newNode = new Node(value)
            let node = this.head;
            let i = 1;
            while(i < index) {
                node = node.next
                i = i+1
            }
            let temp = node.next 
            node.next = newNode;
            newNode.next = temp;  
            this.length++          
        }
    }

    size() {
        let size = 1;
        if(this.head.next === null) {
            return size
        } else {
            let node = this.head;
            while(node.next !== null) {
                size++
                node = node.next;
            }
            return size
        }
    }

    printList() {
        let array = []
        let currentNode = this.head
        while(currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(array)
    }

    lookup(index) {
        if(index === 0){
            return this.head;
        } else if(index >= this.length) {
            return this.tail
        } else{
            let i = 1;
            let currentNode = this.head;
            while(i < index) {
                currentNode = currentNode.next
                i++
            }
            return currentNode.next
        }
    }

    reverse() {
        let firstNode = this.head;
        let secondNode = firstNode.next;
        while(secondNode) {
            let temp = secondNode.next;
            secondNode.next = firstNode;
            firstNode = secondNode
            secondNode = temp
        }
        this.head.next = null;
        this.head = firstNode
        this.printList()
    }

}

// const myLinkedList = new LinkedList(10);
// myLinkedList.append(20)
// myLinkedList.append(111)
// myLinkedList.append(150)
// myLinkedList.append(151)
// myLinkedList.append(152)
// myLinkedList.prepend(5)
// myLinkedList.prepend(1)

// myLinkedList.insert(2, 7)
// myLinkedList.insert(2, 9)
// myLinkedList.insert(200, 8)

// // myLinkedList.remove(200)
// // myLinkedList.remove(200)

// console.log(myLinkedList.lookup(20))

// myLinkedList.printList()
// console.log(myLinkedList.size())

// myLinkedList.reverse()


export default LinkedList;