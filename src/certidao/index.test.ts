import { describe, it, expect } from 'vitest';
import { certidao } from './index.js';

describe('Validador de Matrícula de Certidão', () => {
  it('deve retornar true para uma matrícula válida sem máscara', () => {
    // Matrícula válida de acordo com o algoritmo oficial do CNJ
    expect(certidao('11111111111111111111111111111150')).toBe(true);
  });

  it('deve retornar true para uma matrícula válida com máscara', () => {
    expect(certidao('111111 11 1111 1 11111 11111 1111111 50')).toBe(true);
  });

  it('deve retornar false para uma matrícula com dígito verificador inválido', () => {
    expect(certidao('11111111111111111111111111111151')).toBe(false);
  });

  it('deve retornar false para uma matrícula com tamanho incorreto', () => {
    expect(certidao('123456')).toBe(false);
    expect(certidao('0828210119931000010010000001321')).toBe(false); // 33 digits
  });

  it('deve retornar false para uma matrícula com todos os dígitos iguais', () => {
    expect(certidao('11111111111111111111111111111111')).toBe(false);
  });

  it('deve retornar false para uma matrícula com caracteres não numéricos', () => {
    expect(certidao('08282101199310000100100000013A')).toBe(false);
  });
});
