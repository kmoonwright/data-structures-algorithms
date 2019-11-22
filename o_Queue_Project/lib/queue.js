// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue { // FIFO
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
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
    let oldNode = this.front;
    if (this.length === 0) return null;
    if (this.length === 1) {
      this.front = null;
      this.back = null;
      this.length -= 1;
    } else {
      oldNode = this.front;
      let newNode = this.front.next;
      this.front = newNode;
      this.length -= 1;
    }
    return oldNode.value;
  }

  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.Queue = Queue;