class Stack {
    #data;

    constructor() {
        this.#data = [];
    }

    myPop() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty!');
        }
        return this.#data.pop();
    }

    myPush(x) {
        return this.#data.push(x);
    }

    get size() {
        return this.#data.length;
    }

    isEmpty() {
        return this.size == 0;
    }
}

module.exports = { Stack };