import { describe, it, expect } from 'vitest';
import { pis } from './index.js';

describe('Validador de PIS/PASEP', () => {
  it('deve retornar true para um PIS/PASEP válido sem máscara', () => {
    expect(pis('12038619494')).toBe(true);
    expect(pis('00000000060')).toBe(true); // Caso resto < 2
  });

  it('deve retornar true para um PIS/PASEP válido com máscara', () => {
    expect(pis('120.38619.49-4')).toBe(true);
  });

  it('deve retornar false para um PIS/PASEP com dígito verificador inválido', () => {
    expect(pis('12038619493')).toBe(false);
  });

  it('deve retornar false para um PIS/PASEP com tamanho incorreto', () => {
    expect(pis('123456')).toBe(false);
  });

  it('deve retornar false para um PIS/PASEP com todos os dígitos iguais', () => {
    expect(pis('11111111111')).toBe(false);
  });
});
