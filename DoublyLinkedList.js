class Node {
    constructor(value) {
        this.value = value,
        this.next = null,
        this.previous = null
    } 
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            previous: null
        }
        this.tail = this.head;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);
        newNode.previous = this.tail
        this.tail.next = newNode;
        this.tail = newNode
        this.length++;
    }

    remove(index) {
        if(index === 0) {
            this.head = this.head.next
            this.head.previous = null
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
            currentNode.next.previous = currentNode
            this.length--
            return this.printList()
        }
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.previous = newNode
        this.head = newNode;
        this.length++
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

    insert(index, value) {
        if(index === 0) {
            this.prepend(value)
        } else if (index >= this.length) {
            this.append(value)
        } else {
            const newNode = new Node(value)
            let currentNode = this.head;
            let i = 1;
            while(i < index) {
                currentNode = currentNode.next
                i = i+1
            }
            let temp = currentNode.next
            newNode.previous = currentNode 
            currentNode.next = newNode;
            newNode.next = temp; 
            temp.previous = newNode 
            this.length++          
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

}

const myDoublyLinkedList = new DoublyLinkedList(1);

myDoublyLinkedList.append(2);
myDoublyLinkedList.append(3);
myDoublyLinkedList.prepend(0);
myDoublyLinkedList.insert(2, 22)

myDoublyLinkedList.remove(2)

myDoublyLinkedList.printList()
console.log(myDoublyLinkedList.size())



console.log(myDoublyLinkedList.tail.previous.previous)
