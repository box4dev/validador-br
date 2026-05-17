import { describe, it } from 'node:test';
import assert from 'node:assert';
import { isValidCnpj } from './index.js';

describe('Validador de CNPJ (Numérico e Alfanumérico)', () => {
  it('deve retornar true para um CNPJ válido sem máscara', () => {
    assert.strictEqual(isValidCnpj('11444777000161'), true);
  });

  it('deve retornar true para um CNPJ válido com máscara', () => {
    assert.strictEqual(isValidCnpj('11.444.777/0001-61'), true);
  });

  it('deve retornar false para um CNPJ com todos os dígitos iguais', () => {
    assert.strictEqual(isValidCnpj('11111111111111'), false); // Numérico
    assert.strictEqual(isValidCnpj('00.000.000/0000-00'), false);
  });

  it('deve retornar false para um CNPJ com dígito verificador inválido', () => {
    assert.strictEqual(isValidCnpj('11444777000162'), false);
    assert.strictEqual(isValidCnpj('A1B2C3D4E5F669'), false); // Alfanumérico
  });

  it('deve retornar false para um CNPJ com tamanho incorreto', () => {
    assert.strictEqual(isValidCnpj('12345678'), false);
  });

  it('deve retornar true para um CNPJ alfanumérico válido', () => {
    assert.strictEqual(isValidCnpj('A1B2C3D4E5F668'), true);
  });

  it('deve retornar false para um CNPJ alfanumérico com letras minúsculas', () => {
    assert.strictEqual(isValidCnpj('a1b2c3d4e5f668'), false);
  });

  it('deve retornar false para um CNPJ com caracteres inválidos', () => {
    assert.strictEqual(isValidCnpj('11.444.777/0001-6!'), false);
    assert.strictEqual(isValidCnpj('A1B2C3D4E5F6_8'), false);
  });

  it('deve retornar false para um CNPJ alfanumérico com todos os caracteres iguais', () => {
    assert.strictEqual(isValidCnpj('AAAAAAAAAAAAAAAA'), false);
  });
});
