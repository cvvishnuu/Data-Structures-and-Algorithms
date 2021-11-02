import LinkedList from "../Datastructures/LinkedList.mjs"


const reverseEven = (linkedList) => {
    let result = []
    let stack = []
    let currentNode = linkedList.head
    while(currentNode !== null) {
        if(currentNode.value % 2 === 0) {
            stack.push(currentNode.value)
        } else {
            if(stack.length > 0){
                while(stack.length > 0) {                        
                    result.push(stack.pop())
                }
                result.push(currentNode.value)
            } else {
                result.push(currentNode.value)
            } 
        }                        
        currentNode = currentNode.next
    }   
    if(stack.length) {
        while(stack.length > 0) {                        
            result.push(stack.pop())
        } 
    }     
    return [...result] 
}



const myLinkedList = new LinkedList(10);
myLinkedList.append(20)
myLinkedList.append(8)
myLinkedList.append(16)
myLinkedList.append(151)
myLinkedList.append(152)
myLinkedList.append(2)
myLinkedList.append(4)




myLinkedList.printList()

console.log(reverseEven(myLinkedList))


