import { describe, it, expect } from 'vitest';
import { cartaoCredito } from './index.js';

describe('Validador de Cartão de Crédito', () => {
  it('deve retornar true para um número de cartão de crédito válido (Visa)', () => {
    expect(cartaoCredito('4716631585215113')).toBe(true); // Visa 16
  });

  it('deve retornar true para um número de cartão de crédito válido (Mastercard)', () => {
    expect(cartaoCredito('5118631279831135')).toBe(true); // Mastercard 16
  });

  it('deve retornar true para um cartão válido com máscara', () => {
    expect(cartaoCredito('3796 462975 88934')).toBe(true);
  });

  it('deve retornar false para um cartão com checksum inválido', () => {
    expect(cartaoCredito('4539036038461495')).toBe(false);
  });

  it('deve retornar false para um cartão com menos de 13 dígitos', () => {
    expect(cartaoCredito('123456789012')).toBe(false);
  });

  it('deve retornar false para um cartão com mais de 19 dígitos', () => {
    expect(cartaoCredito('12345678901234567890')).toBe(false);
  });
});
