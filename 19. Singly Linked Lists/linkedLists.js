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
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    console.log('POP')
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

  unshift(val) {
    // Add new element to start of list
    // Insert new head, point old head to next prop of new head
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (this.length === 0 || idx < 0 || idx >= this.length) return null;
    let currentIndex = 0;
    let currentNode = this.head;
    while (currentIndex <= idx) {
      currentIndex++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  set(index, value) {
    // Update value at a particular index
    let foundNode = this.get(index);
    if (foundNode){
      foundNode.val = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    // add a node at a specific position
    if (index > this.length || index < 0) return false;
    if (index === this.length) return this.push(value);
    if (index === 0) return this.unshift(value)

    let oldNodeAtLocation = this.get(index);
    let priorNode = this.get(index-1)
    let newNode = new Node(value);
    newNode.next = oldNodeAtLocation;
    priorNode.next = newNode;
    this.length++;
    return true
  }

  remove(index) {
    if (index > this.length || index < 0) return undefined;
    if (index === this.length - 1) {
      return this.pop()
    }
    if (index === 0) {
      return this.shift()
    }
    let previousNode = this.get(index - 1);
    let removedNode = previousNode.next;
    previousNode.next = removedNode.next;
    this.length--;
    return removedNode;

  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
       next = node.next;
       node.next = prev;
       prev = node;
       node = next;
    }
    return this;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr)
  }

}

list = new SinglyLinkedList()
list.push('hey')
list.push('yo')
list.push('hello')
// list.push('ey')
// list.push('yooo')
// console.log(list)
// list.shift()
// console.log(list)
// list.shift()
// console.log(list)
// list.unshift('whut')
// console.log(list)
console.log(list.get(2))
list.insert(1, 'test')
console.log(list)
console.log(list.get(1))
console.log(list.remove(3))
list.print()
list.reverse()
list.print()