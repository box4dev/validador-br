import { describe, it, expect } from 'vitest';
import { isValidPis } from './index.js';

describe('Validador de PIS/PASEP', () => {
  it('deve retornar true para um PIS/PASEP válido sem máscara', () => {
    expect(isValidPis('12038619494')).toBe(true);
    expect(isValidPis('00000000060')).toBe(true); // Caso resto < 2
  });

  it('deve retornar true para um PIS/PASEP válido com máscara', () => {
    expect(isValidPis('120.38619.49-4')).toBe(true);
  });

  it('deve retornar false para um PIS/PASEP com dígito verificador inválido', () => {
    expect(isValidPis('12038619493')).toBe(false);
  });

  it('deve retornar false para um PIS/PASEP com tamanho incorreto', () => {
    expect(isValidPis('123456')).toBe(false);
  });

  it('deve retornar false para um PIS/PASEP com todos os dígitos iguais', () => {
    expect(isValidPis('11111111111')).toBe(false);
  });
});
