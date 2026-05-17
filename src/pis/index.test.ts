import { describe, it } from 'node:test';
import assert from 'node:assert';
import { isValidPis } from './index.js';

describe('Validador de PIS/PASEP', () => {
  it('deve retornar true para um PIS/PASEP válido sem máscara', () => {
    assert.strictEqual(isValidPis('12038619494'), true);
    assert.strictEqual(isValidPis('00000000060'), true); // Caso resto < 2
  });

  it('deve retornar true para um PIS/PASEP válido com máscara', () => {
    assert.strictEqual(isValidPis('120.38619.49-4'), true);
  });

  it('deve retornar false para um PIS/PASEP com dígito verificador inválido', () => {
    assert.strictEqual(isValidPis('12038619493'), false);
  });

  it('deve retornar false para um PIS/PASEP com tamanho incorreto', () => {
    assert.strictEqual(isValidPis('123456'), false);
  });

  it('deve retornar false para um PIS/PASEP com todos os dígitos iguais', () => {
    assert.strictEqual(isValidPis('11111111111'), false);
  });
});
