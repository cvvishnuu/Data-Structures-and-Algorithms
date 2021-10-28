const reverse = () => {
    let firstNode = head;
    let secondNode = first.next;
    while(secondNode) {
        let temp = secondNode.next;
        secondNode.next = firstNode;
        firstNode = secondNode;
        secondNode = temp
    }
    head.next = null;
    head = firstNode
}


const traverse = (index) => {
    if(index === 0) return head
    let i = 0;
    let currentNode = head;
    while(i < index) {
        currentNode = currentNode.next;
        i++
    }
    return currentNode

}