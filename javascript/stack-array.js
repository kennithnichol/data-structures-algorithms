class Stack {
    constructor() {
        this.stack = [];
    }
    peek() {
        return this.stack[this.stack.length - 1];
    }
    push(value) {
        this.stack.push(value);
        return this.stack;
    }
    pop() {
        this.stack.pop();
        return this.stack;
    }
    isEmpty() {
        return this.stack.length === 0;
    }
}

// check
const myStack = new Stack();
myStack.peek();
myStack.push('google.com');
myStack.push('bing.com');
myStack.push('youtube.com');
myStack.pop();
myStack.pop();
myStack.pop();
