const { Stack } = require('../examples/ex1-stack.js');

beforeEach(() => {
    stack = new Stack;
});

test('Stack is empty', () => {
    expect(stack.isEmpty()).toBe(true);
});

test('Pop empty stack exception', () => {
    expect(() => {stack.myPop()}).toThrow('Stack is empty!');
});

test('Push items to stack and pop', () => {
    stack.myPush(20);
    stack.myPush(5);
    expect(stack.myPop()).toBe(5);
});

test('Stack size', () => {
    stack.myPush(20);
    stack.myPush(5);
    expect(stack.size).toBe(2);
});
