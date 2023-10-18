const { sub, getRandomFloat } = require('../examples/ex3-parameters.js');

// Teste parametrizado
test.concurrent.each([[10, 2, 8], [1, 5, -4]])('Subtract %i and %i', 
    async (a, b, expected) => {
        expect(sub(a, b)).toBe(expected);
});

// Teste repetido
test.concurrent.each(Array(3).fill(null))('Flaky test', 
    async () => {
        expect(getRandomFloat() < 5).toBeTruthy();
});