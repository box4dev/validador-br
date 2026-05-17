import { describe, it } from 'node:test';
import assert from 'node:assert';
import { isValidCpf } from './index.js';

describe('Validador de CPF', () => {
  it('deve retornar true para um CPF válido sem máscara', () => {
    assert.strictEqual(isValidCpf('88144590708'), true);
    assert.strictEqual(isValidCpf('00000000604'), true); // Caso resto 10
  });

  it('deve retornar true para um CPF válido com máscara', () => {
    assert.strictEqual(isValidCpf('777.422.077-10'), true);
  });

  it('deve retornar false para um CPF com todos os dígitos iguais', () => {
    assert.strictEqual(isValidCpf('11111111111'), false);
    assert.strictEqual(isValidCpf('222.222.222-22'), false);
  });

  it('deve retornar false para um CPF inválido ou com tamanho incorreto', () => {
    assert.strictEqual(isValidCpf('12345678911'), false); // Falha no primeiro dígito
    assert.strictEqual(isValidCpf('12345678900'), false); // Falha no segundo dígito
    assert.strictEqual(isValidCpf('12345678'), false);
  });
});
