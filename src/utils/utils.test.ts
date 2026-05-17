import assert from 'node:assert';
import { describe, it } from 'node:test';
import { clean } from './clean.js';
import { luhn } from './luhn.js';

describe('Utilitários', () => {
  describe('luhn', () => {
    it('deve retornar false para strings não numéricas', () => {
      assert.strictEqual(luhn('abc'), false);
      assert.strictEqual(luhn(''), false);
    });
  });

  describe('clean', () => {
    it('deve lidar com números', () => {
      assert.strictEqual(clean(123456), '123456');
    });
  });
});
