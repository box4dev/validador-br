import { describe, it, expect } from 'vitest';
import { isValidCnh } from './index.js';

describe('Validador de CNH (Formato)', () => {
  it('deve retornar true para uma CNH com formato válido', () => {
    expect(isValidCnh('12345678901')).toBe(true);
  });

  it('deve retornar false para uma CNH com menos de 11 dígitos', () => {
    expect(isValidCnh('1234567890')).toBe(false);
  });

  it('deve retornar false para uma CNH com mais de 11 dígitos', () => {
    expect(isValidCnh('123456789012')).toBe(false);
  });

  it('deve retornar false para uma CNH com todos os dígitos iguais', () => {
    expect(isValidCnh('11111111111')).toBe(false);
  });

  it('deve aceitar CNH com caracteres não numéricos e validar o formato', () => {
    expect(isValidCnh('123.456.789-01')).toBe(true);
  });
});
