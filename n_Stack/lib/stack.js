// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
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

class Stack {
  // FIFO
  constructor() {
    this.bottom = null; // Front of the Stack
    this.top = null; // Back of the stack
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.top) {
      newNode.next = this.top;
      this.top = newNode;
      this.length += 1;
    } else {
      this.top = newNode;
      this.bottom = newNode;
      this.length += 1;
    }
    return this.length;
  }

  pop() {
    let oldTop;
    if (!this.top) return null;
    if (this.length === 1) {
      oldTop = this.top;
      this.top = null;
      this.bottom = null;
      this.length -= 1;
    } else {
      oldTop = this.top;
      let newTop = oldTop.next;
      this.top = newTop;
      this.length -= 1;
    }
    return oldTop.value;
  }

  size() {
    return this.length
  }
}

exports.Node = Node;
exports.Stack = Stack;
