import { describe, it, expect } from 'vitest';
import { tituloEleitor } from './index.js';

describe('Validador de Título de Eleitor', () => {
  it('deve retornar true para um título de eleitor válido', () => {
    expect(tituloEleitor('290983680116')).toBe(true); // SP
    expect(tituloEleitor('123456780590')).toBe(true); // BA
    expect(tituloEleitor('000000060108')).toBe(true); // Caso resto 10
  });

  it('deve retornar true para um título de eleitor válido com máscara', () => {
    expect(tituloEleitor('2909 8368 0116')).toBe(true);
  });

  it('deve retornar false para um título com dígito verificador inválido', () => {
    expect(tituloEleitor('290983680117')).toBe(false);
  });

  it('deve retornar false para um título com UF inválida', () => {
    expect(tituloEleitor('123456780012')).toBe(false); // UF 00
    expect(tituloEleitor('123456782912')).toBe(false); // UF 29
    expect(tituloEleitor('123456780112')).toBe(false); // Valid UF but invalid DV
  });

  it('deve retornar false para um título com tamanho incorreto', () => {
    expect(tituloEleitor('123456')).toBe(false);
  });

  it('deve retornar false para um título com todos os dígitos iguais', () => {
    expect(tituloEleitor('111111111111')).toBe(false);
  });
});
