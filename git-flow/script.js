// Importa o módulo 'assert' para realizar testes
const assert = require('assert');

// Define a função que será testada
function soma(x, y) {
  return x + y;
}

// Cria um conjunto de testes
describe('Testes para a função soma', () => {
  // Teste 1: soma de dois números positivos
  it('deve retornar o valor esperado para dois números positivos', () => {
    const resultado = soma(1, 2);
    assert.strictEqual(resultado, 3);
  });

  // Teste 2: soma de dois números negativos
  it('deve retornar o valor esperado para dois números negativos', () => {
    const resultado = soma(-1, -2);
    assert.strictEqual(resultado, -3);
  });

  // Teste 3: soma de um número positivo e um número negativo
  it('deve retornar o valor esperado para um número positivo e um número negativo', () => {
    const resultado = soma(1, -2);
    assert.strictEqual(resultado, -1);
  });
});
