import { describe, it } from 'node:test';
import assert from 'node:assert';
import { isValidTituloEleitor } from './index.js';

describe('Validador de Título de Eleitor', () => {
  it('deve retornar true para um título de eleitor válido', () => {
    assert.strictEqual(isValidTituloEleitor('290983680116'), true); // SP
    assert.strictEqual(isValidTituloEleitor('123456780590'), true); // BA
    assert.strictEqual(isValidTituloEleitor('000000060108'), true); // Caso resto 10
  });

  it('deve retornar true para um título de eleitor válido com máscara', () => {
    assert.strictEqual(isValidTituloEleitor('2909 8368 0116'), true);
  });

  it('deve retornar false para um título com dígito verificador inválido', () => {
    assert.strictEqual(isValidTituloEleitor('290983680117'), false);
  });

  it('deve retornar false para um título com UF inválida', () => {
    assert.strictEqual(isValidTituloEleitor('123456780012'), false); // UF 00
    assert.strictEqual(isValidTituloEleitor('123456782912'), false); // UF 29
    assert.strictEqual(isValidTituloEleitor('123456780112'), false); // Valid UF but invalid DV
  });

  it('deve retornar false para um título com tamanho incorreto', () => {
    assert.strictEqual(isValidTituloEleitor('123456'), false);
  });

  it('deve retornar false para um título com todos os dígitos iguais', () => {
    assert.strictEqual(isValidTituloEleitor('111111111111'), false);
  });
});
