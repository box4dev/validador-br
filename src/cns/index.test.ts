import { describe, it, expect } from 'vitest';
import { cns } from './index.js';

describe('Validador de CNS', () => {
  it('deve retornar true para um CNS definitivo válido', () => {
    expect(cns('134881700940000')).toBe(true);
    expect(cns('260481444950005')).toBe(true);
  });

  it('deve retornar true para um CNS provisório válido', () => {
    expect(cns('887914945720000')).toBe(true);
  });

  it('deve retornar false para um CNS com tamanho incorreto', () => {
    expect(cns('12345678901234')).toBe(false); // 14 dígitos
  });

  it('deve retornar false para um CNS definitivo inválido', () => {
    expect(cns('131353003360008')).toBe(false);
  });

  it('deve retornar false para um CNS provisório inválido', () => {
    expect(cns('898001000014844')).toBe(false);
  });

  it('deve retornar false para um CNS com prefixo inválido', () => {
    expect(cns('331353003360007')).toBe(false);
    expect(cns('600038165840001')).toBe(false);
  });
});
