const { forEach } = require('../examples/ex2-mocks.js');

const mockFunc = jest.fn(x => x + 1);

test('forEach mock function', () => {
    forEach([23, 10, 5], mockFunc);
  
    // Nº de chamadas
    expect(mockFunc.mock.calls).toHaveLength(3);
  
    // Primeiro argumento da segunda chamada = 10
    expect(mockFunc.mock.calls[1][0]).toBe(10);
  
    // Valor de retorno das chamadas
    expect(mockFunc.mock.results[0].value).toBe(24);
    expect(mockFunc.mock.results[1].value).toBe(11);
    expect(mockFunc.mock.results[2].value).toBe(6);
});