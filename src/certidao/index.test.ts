import assert from 'node:assert';
import { describe, it } from 'node:test';
import { isValidCertidao } from './index.js';

describe('Validador de Matrícula de Certidão', () => {
  it('deve retornar true para uma matrícula válida sem máscara', () => {
    // Matrícula válida de acordo com o algoritmo oficial do CNJ
    assert.strictEqual(isValidCertidao('11111111111111111111111111111150'), true);
  });

  it('deve retornar true para uma matrícula válida com máscara', () => {
    assert.strictEqual(isValidCertidao('111111 11 1111 1 11111 11111 1111111 50'), true);
  });

  it('deve retornar false para uma matrícula com dígito verificador inválido', () => {
    assert.strictEqual(isValidCertidao('11111111111111111111111111111151'), false);
  });

  it('deve retornar false para uma matrícula com tamanho incorreto', () => {
    assert.strictEqual(isValidCertidao('123456'), false);
    assert.strictEqual(isValidCertidao('0828210119931000010010000001321'), false); // 33 digits
  });

  it('deve retornar false para uma matrícula com todos os dígitos iguais', () => {
    assert.strictEqual(isValidCertidao('11111111111111111111111111111111'), false);
  });

  it('deve retornar false para uma matrícula com caracteres não numéricos', () => {
    assert.strictEqual(isValidCertidao('08282101199310000100100000013A'), false);
  });
});
