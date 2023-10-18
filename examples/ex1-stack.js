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

    isEmpty() {
        return this.size == 0;
    }

    get size() {
        return this.#data.length;
    }

    get topItem() {
        return this.#data[this.#data.size-1];
    }

}

module.exports = { Stack };