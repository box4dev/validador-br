import assert from 'node:assert';
import { describe, it } from 'node:test';
import { isValidCnh } from './index.js';

describe('Validador de CNH (Formato)', () => {
  it('deve retornar true para uma CNH com formato válido', () => {
    assert.strictEqual(isValidCnh('12345678901'), true);
  });

  it('deve retornar false para uma CNH com menos de 11 dígitos', () => {
    assert.strictEqual(isValidCnh('1234567890'), false);
  });

  it('deve retornar false para uma CNH com mais de 11 dígitos', () => {
    assert.strictEqual(isValidCnh('123456789012'), false);
  });

  it('deve retornar false para uma CNH com todos os dígitos iguais', () => {
    assert.strictEqual(isValidCnh('11111111111'), false);
  });

  it('deve aceitar CNH com caracteres não numéricos e validar o formato', () => {
    assert.strictEqual(isValidCnh('123.456.789-01'), true);
  });
});
