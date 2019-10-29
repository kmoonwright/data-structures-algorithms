// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        if (this.head === null){
            let newNode = new Node(val);
            this.head = newNode;
            this.tail = newNode;
        } else {
            let newNode = new Node(val);
            this.tail.next = newNode;
            this.tail = newNode;
        }
        
        this.length += 1;            
        return this;
    }


    // TODO: Implement the removeTail method here
    removeTail() {
        if (this.length === 0) return undefined;
        // let tempNode;
        let secondToLast;
        let currentNode = this.head;
        if (this.length === 1) {
            secondToLast = this.tail;
            this.head = null;
            this.tail = null;
        } else {
            while (currentNode.next){
                secondToLast = currentNode;
                currentNode = currentNode.next;
            }
            this.tail = secondToLast;
            this.tail.next = null;
        }
        this.length -= 1;
        return currentNode;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        if (this.head === null){
            let newNode = new Node(val);
            this.head = newNode;
            this.tail = newNode;
        } else {
            let newNode = new Node(val);
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length += 1;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (this.length === 0) return undefined;
        let secondNode;
        let currentNode = this.head;
        if (this.length === 1) {
            secondNode = this.head;
            this.head = null;
            this.tail = null;
        } else {    
            secondNode = this.head.next;
            this.head = secondNode;
        }
        this.length -= 1;
        return currentNode;
    }

    // TODO: Implement the contains method here
    contains(target) {
        let current = this.head;
        while (current) {
            if (current.value === target) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if (index < 0 || index > this.length - 1) return null;

        let counter = 0;
        let currentNode = this.head;
        while (currentNode){
            if (counter === index){
                return currentNode;
            }
            currentNode = currentNode.next;
            counter += 1;
        }
        return null;
    }

    // TODO: Implement the set method here
    set(index, val) {
        let targetNode = this.get(index);
        if (targetNode === null) {
            return false;
        } else {
            targetNode.value = val;
            return true;
        }
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index < 0 || index > this.length - 1) return false;
        if (index === 0) this.addToHead(val);
        if (index === this.length) this.addToTail(val);
        
        let targetNode = this.get(index - 1);
        if (targetNode === null) {
            return false;
        } else {
            let newNode = new Node(val);
            let originalNext = targetNode.next;
            targetNode.next = newNode;
            newNode.next = originalNext;

            this.length += 1;
            return true;
        }
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index < 0 || index > this.length - 1) return undefined;
        if (index === 0) this.removeHead();
        if (index === this.length) this.removeTail();

        let targetNode = this.get(index - 1);
        if (targetNode === null) {
            return false;
        } else {
            let tempNode = targetNode.next;
            targetNode.next = targetNode.next.next;

            this.length -= 1;
            return tempNode;
        }
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;