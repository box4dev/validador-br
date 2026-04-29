import { describe, it, expect } from 'vitest';
import { isValidCpf } from './index.js';

describe('Validador de CPF', () => {
  it('deve retornar true para um CPF válido sem máscara', () => {
    expect(isValidCpf('88144590708')).toBe(true);
    expect(isValidCpf('00000000604')).toBe(true); // Caso resto 10
  });

  it('deve retornar true para um CPF válido com máscara', () => {
    expect(isValidCpf('777.422.077-10')).toBe(true);
  });

  it('deve retornar false para um CPF com todos os dígitos iguais', () => {
    expect(isValidCpf('11111111111')).toBe(false);
    expect(isValidCpf('222.222.222-22')).toBe(false);
  });

  it('deve retornar false para um CPF inválido ou com tamanho incorreto', () => {
    expect(isValidCpf('12345678911')).toBe(false); // Falha no primeiro dígito
    expect(isValidCpf('12345678900')).toBe(false); // Falha no segundo dígito
    expect(isValidCpf('12345678')).toBe(false);
  });
});
