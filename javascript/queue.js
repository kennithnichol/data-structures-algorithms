
class Node  {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.first;
    }
    enqueue(value) {
        const node = new Node(value);
        if (this.length === 0) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.length++;
        return this;
    }
    dequeue() {
        if (!this.first) {
            return null;
        }
        if (this.first === this.last) {
            this.last = null;
        }
        const node = this.first;
        this.first = this.first.next;
        this.length--;
        return this;
    }
    isEmpty() {
        return this.length === 0;
    }
}

// check
const myQueue = new Queue();
myQueue.peek();
myQueue.enqueue('event1');
myQueue.enqueue('event2');
myQueue.enqueue('event3');
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
