import { describe, it } from 'node:test';
import assert from 'node:assert';
import { isValidCartaoCredito } from './index.js';

describe('Validador de Cartão de Crédito', () => {
  it('deve retornar true para um número de cartão de crédito válido (Visa)', () => {
    assert.strictEqual(isValidCartaoCredito('4716631585215113'), true); // Visa 16
  });

  it('deve retornar true para um número de cartão de crédito válido (Mastercard)', () => {
    assert.strictEqual(isValidCartaoCredito('5118631279831135'), true); // Mastercard 16
  });

  it('deve retornar true para um cartão válido com máscara', () => {
    assert.strictEqual(isValidCartaoCredito('3796 462975 88934'), true);
  });

  it('deve retornar false para um cartão com checksum inválido', () => {
    assert.strictEqual(isValidCartaoCredito('4539036038461495'), false);
  });

  it('deve retornar false para um cartão com menos de 13 dígitos', () => {
    assert.strictEqual(isValidCartaoCredito('123456789012'), false);
  });

  it('deve retornar false para um cartão com mais de 19 dígitos', () => {
    assert.strictEqual(isValidCartaoCredito('12345678901234567890'), false);
  });
});
