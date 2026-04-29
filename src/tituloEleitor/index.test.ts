import { describe, it, expect } from 'vitest';
import { isValidTituloEleitor } from './index.js';

describe('Validador de Título de Eleitor', () => {
  it('deve retornar true para um título de eleitor válido', () => {
    expect(isValidTituloEleitor('290983680116')).toBe(true); // SP
    expect(isValidTituloEleitor('123456780590')).toBe(true); // BA
    expect(isValidTituloEleitor('000000060108')).toBe(true); // Caso resto 10
  });

  it('deve retornar true para um título de eleitor válido com máscara', () => {
    expect(isValidTituloEleitor('2909 8368 0116')).toBe(true);
  });

  it('deve retornar false para um título com dígito verificador inválido', () => {
    expect(isValidTituloEleitor('290983680117')).toBe(false);
  });

  it('deve retornar false para um título com UF inválida', () => {
    expect(isValidTituloEleitor('123456780012')).toBe(false); // UF 00
    expect(isValidTituloEleitor('123456782912')).toBe(false); // UF 29
    expect(isValidTituloEleitor('123456780112')).toBe(false); // Valid UF but invalid DV
  });

  it('deve retornar false para um título com tamanho incorreto', () => {
    expect(isValidTituloEleitor('123456')).toBe(false);
  });

  it('deve retornar false para um título com todos os dígitos iguais', () => {
    expect(isValidTituloEleitor('111111111111')).toBe(false);
  });
});
