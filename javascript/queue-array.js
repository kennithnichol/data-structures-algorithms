class Queue {
    constructor() {
        this.queue = [];
    }
    peek() {
        return this.queue[0];
    }
    enqueue(value) {
        this.queue.push(value);
        return this.queue;
    }
    dequeue() {
        // this is an O(n) call, everytime.
        // use a linked-list implementation for better performance.
        this.queue.shift();
        return this.queue;
    }
    isEmpty() {
        return this.queue.length === 0;
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
