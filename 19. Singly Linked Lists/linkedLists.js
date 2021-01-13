class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0 & !this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      // Edge case for one single item
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    // remove first element. 
    // Set head property to be current head's next property, store current
    // head property in a variable.
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

}

list = new SinglyLinkedList()
list.push('hey')
list.push('yo')
list.push('hello')
list.push('ey')
list.push('yooo')
console.log(list)
list.shift()
console.log(list)
list.shift()
console.log(list)