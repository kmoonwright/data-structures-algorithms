// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push 
//   - Pop 
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
    // TODO: Implement the Node class!
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    // TODO: Implement the Stack class!
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(node) {
        let newNode = new Node(node.value);

        if (!this.top) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            let temp = this.top;
            this.top = newNode;
            this.top.next = temp;
        }

        this.length += 1;
        return this.length;
    }

    pop() {
        if (!this.top) return null;

        let temp = this.top;
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length -= 1;
        return temp;
    }

    size() {
        return this.length;
    }
}

class StackQueue {
    // TODO: Implement the StackQueue class!
    constructor() {
        this.inStack = null;
        this.outStack = null;
        this.front = null;
        this.back = null;
        this.length = 0
    }

    enqueue(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
        this.front = newNode;
        this.back = newNode;
        this.length += 1;
    } else {
        // let oldNode = this.back;
        this.back.next = newNode
        this.back = newNode;
        // newNode.next = oldNode;
        this.length += 1;
    }
    return this.length;
    }

    dequeue() {
        if (!this.front) return null;
        let oldFront = this.front;
        if (this.front === this.back) {
            this.front = null;
            this.back = null;
            this.length -= 1;
        } else {
            let newFront = this.front.next;
            this.front = newFront;
            this.length -= 1;
        }
        return oldFront;
    }

    size() {
        return this.length;
    }
};

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
