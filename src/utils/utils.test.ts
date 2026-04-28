import { describe, it, expect } from 'vitest';
import { luhn } from './luhn.js';
import { clean } from './clean.js';

describe('Utilitários', () => {
  describe('luhn', () => {
    it('deve retornar false para strings não numéricas', () => {
      expect(luhn('abc')).toBe(false);
      expect(luhn('')).toBe(false);
    });
  });

  describe('clean', () => {
    it('deve lidar com números', () => {
      expect(clean(123456)).toBe('123456');
    });
  });
});
