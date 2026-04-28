import { describe, it, expect } from 'vitest';
import { cpf } from './index.js';

describe('Validador de CPF', () => {
  it('deve retornar true para um CPF válido sem máscara', () => {
    expect(cpf('88144590708')).toBe(true);
    expect(cpf('00000000604')).toBe(true); // Caso resto 10
  });

  it('deve retornar true para um CPF válido com máscara', () => {
    expect(cpf('777.422.077-10')).toBe(true);
  });

  it('deve retornar false para um CPF com todos os dígitos iguais', () => {
    expect(cpf('11111111111')).toBe(false);
    expect(cpf('222.222.222-22')).toBe(false);
  });

  it('deve retornar false para um CPF inválido ou com tamanho incorreto', () => {
    expect(cpf('12345678911')).toBe(false); // Falha no primeiro dígito
    expect(cpf('12345678900')).toBe(false); // Falha no segundo dígito
    expect(cpf('12345678')).toBe(false);
  });
});
