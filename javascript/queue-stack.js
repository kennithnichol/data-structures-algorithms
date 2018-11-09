class Queue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }
    peek() {
        if (!this.stack2.isEmpty()) {
            return this.stack2.peek();
        } else {
            while(!this.stack1.isEmpty()) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.peek();
    }
    enqueue(value) {
        this.stack1.push(value);
    }

    dequeue() {
        if (this.stack2.isEmpty()) {
            while(!this.stack1.isEmpty()) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }
    isEmpty() {
        return this.stack1.isEmpty() && this.stack2.isEmpty();
    }
}

class Stack {
    constructor() {
        this.stack = [];
    }
    peek() {
        return this.stack[this.stack.length - 1];
    }
    push(value) {
        this.stack.push(value);
    }
    pop() {
        return this.stack.pop();
    }
    isEmpty() {
        return this.stack.length === 0;
    }
}

// check
const myQueue = new Queue();
myQueue.enqueue('hello');
myQueue.enqueue('world');
console.log(myQueue.peek()); // hello
myQueue.dequeue();
console.log(myQueue.peek()); // world
myQueue.dequeue();
console.log(myQueue.peek()); // undefined