
class Node  {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top;
    }
    push(value) {
        const node = new Node(value);
        if (this.length === 0) {
            this.bottom = node;
            this.top = node;
        } else {
            const pointer = this.top;
            this.top = node;
            this.top.next = pointer;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.top) {
            return null;
        }
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        const node = this.top;
        this.top = this.top.next;
        this.length--;
        return this;
    }
    isEmpty() {
        return this.length === 0;
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
