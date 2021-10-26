// Add to end of array type and remove from start
// push - shift
class QueueEnd {
    constructor() {
        this.data = [];
    }
    enqueue(val) {
        this.data.push(val);
    }
    dequeue() {
        let value = this.data.shift();
        return value;
    }
}

// Add to start of Array, remove from end
// unshift - pop
class QueueStart {
    constructor() {
        this.data = [];
    }
    enqueue(val) {
        this.data.unshift(val);
    }
    dequeue() {
        let value = this.data.pop();
        return value;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
// To implement efficiently using a Linked List: Add to end and remove from beginning
// Because Insertion at end requires no indexing, just create a new node
// and the previous node's next to it, and set it as last
// To remove, just reassign head property
// Remove from head, add to tail
// Dequeue === shift
// Enqueue === pushed

class SLLQueue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value) {
        let node = new Node(value);

        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        return ++this.size
    }

    dequeue() {
        if (!this.first) {
            return null;
        }
        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        } 
        this.first = this.first.next;
        this.size--;
        return temp.value;

    }
}

q = new SLLQueue();
q.enqueue('a')
q.enqueue('b')
q.enqueue('c')
// console.log(q)
// console.log(q.first, q.last)
let res = q.dequeue()
console.log(res, q)