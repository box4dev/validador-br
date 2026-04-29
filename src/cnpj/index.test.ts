import { describe, it, expect } from 'vitest';
import { isValidCnpj } from './index.js';

describe('Validador de CNPJ (Numérico e Alfanumérico)', () => {
  it('deve retornar true para um CNPJ válido sem máscara', () => {
    expect(isValidCnpj('11444777000161')).toBe(true);
  });

  it('deve retornar true para um CNPJ válido com máscara', () => {
    expect(isValidCnpj('11.444.777/0001-61')).toBe(true);
  });

  it('deve retornar false para um CNPJ com todos os dígitos iguais', () => {
    expect(isValidCnpj('11111111111111')).toBe(false); // Numérico
    expect(isValidCnpj('00.000.000/0000-00')).toBe(false);
  });

  it('deve retornar false para um CNPJ com dígito verificador inválido', () => {
    expect(isValidCnpj('11444777000162')).toBe(false);
    expect(isValidCnpj('A1B2C3D4E5F669')).toBe(false); // Alfanumérico
  });

  it('deve retornar false para um CNPJ com tamanho incorreto', () => {
    expect(isValidCnpj('12345678')).toBe(false);
  });

  it('deve retornar true para um CNPJ alfanumérico válido', () => {
    expect(isValidCnpj('A1B2C3D4E5F668')).toBe(true);
  });

  it('deve retornar false para um CNPJ alfanumérico com letras minúsculas', () => {
    expect(isValidCnpj('a1b2c3d4e5f668')).toBe(false);
  });

  it('deve retornar false para um CNPJ com caracteres inválidos', () => {
    expect(isValidCnpj('11.444.777/0001-6!')).toBe(false);
    expect(isValidCnpj('A1B2C3D4E5F6_8')).toBe(false);
  });

  it('deve retornar false para um CNPJ alfanumérico com todos os caracteres iguais', () => {
    expect(isValidCnpj('AAAAAAAAAAAAAAAA')).toBe(false);
  });
});
