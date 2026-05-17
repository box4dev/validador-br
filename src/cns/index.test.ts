import assert from 'node:assert';
import { describe, it } from 'node:test';
import { isValidCns } from './index.js';

describe('Validador de CNS', () => {
  it('deve retornar true para um CNS definitivo válido', () => {
    assert.strictEqual(isValidCns('134881700940000'), true);
    assert.strictEqual(isValidCns('260481444950005'), true);
  });

  it('deve retornar true para um CNS provisório válido', () => {
    assert.strictEqual(isValidCns('887914945720000'), true);
  });

  it('deve retornar false para um CNS com tamanho incorreto', () => {
    assert.strictEqual(isValidCns('12345678901234'), false); // 14 dígitos
  });

  it('deve retornar false para um CNS definitivo inválido', () => {
    assert.strictEqual(isValidCns('131353003360008'), false);
  });

  it('deve retornar false para um CNS provisório inválido', () => {
    assert.strictEqual(isValidCns('898001000014844'), false);
  });

  it('deve retornar false para um CNS com prefixo inválido', () => {
    assert.strictEqual(isValidCns('331353003360007'), false);
    assert.strictEqual(isValidCns('600038165840001'), false);
  });
});
