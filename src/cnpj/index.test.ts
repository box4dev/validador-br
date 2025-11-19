import { describe, it, expect } from 'vitest';
import { cnpj } from './index.js';

describe('Validador de CNPJ (Numérico e Alfanumérico)', () => {
  it('deve retornar true para um CNPJ válido sem máscara', () => {
    expect(cnpj('11444777000161')).toBe(true);
  });

  it('deve retornar true para um CNPJ válido com máscara', () => {
    expect(cnpj('11.444.777/0001-61')).toBe(true);
  });

  it('deve retornar false para um CNPJ com todos os dígitos iguais', () => {
    expect(cnpj('11111111111111')).toBe(false); // Numérico
    expect(cnpj('00.000.000/0000-00')).toBe(false);
  });

  it('deve retornar false para um CNPJ com dígito verificador inválido', () => {
    expect(cnpj('11444777000162')).toBe(false);
    expect(cnpj('A1B2C3D4E5F669')).toBe(false); // Alfanumérico
  });

  it('deve retornar false para um CNPJ com tamanho incorreto', () => {
    expect(cnpj('12345678')).toBe(false);
  });

  it('deve retornar true para um CNPJ alfanumérico válido', () => {
    expect(cnpj('A1B2C3D4E5F668')).toBe(true);
  });

  it('deve retornar false para um CNPJ alfanumérico com letras minúsculas', () => {
    expect(cnpj('a1b2c3d4e5f668')).toBe(false);
  });

  it('deve retornar false para um CNPJ com caracteres inválidos', () => {
    expect(cnpj('11.444.777/0001-6!')).toBe(false);
    expect(cnpj('A1B2C3D4E5F6_8')).toBe(false);
  });

  it('deve retornar false para um CNPJ alfanumérico com todos os caracteres iguais', () => {
    expect(cnpj('AAAAAAAAAAAAAAAA')).toBe(false);
  });
});
