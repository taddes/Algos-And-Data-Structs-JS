// Simple Stack
class Stack {
    constructor() {
        this.data = [];
    }

    push(record) {
        this.data.push(record);
    }

    pop() {
        return this.data.pop()
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class SLLStack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        let node = new Node(val);
        if (this.size === 0) {
            this.first = node;
            this.last = node;
        } else {
            let temp = this.first;
            this.first = node;
            this.first.next = temp;
        }
        return ++this.size;
    }

    pop() {
        if (this.size === 0) {
            return null;
        } 
        let temp = this.first;
        // Only a single value exists this.size === 1
        if (this.first === this.last) {
            this.last = null;
        } 
        this.first = this.first.next;
        this.size--;
        return temp.value;

    }
}

module.exports = Stack;