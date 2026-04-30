import { describe, it, expect } from 'vitest';
import { isValidIE } from './index.js';

describe('Validador de Inscrição Estadual', () => {
  it('deve retornar false para UF inválida', () => {
    expect(isValidIE('123456789', 'XX')).toBe(false);
    expect(isValidIE('abc', 'SP')).toBe(false); // Caso não numérico
  });

  describe('por estado', () => {
    it('AC', () => {
      expect(isValidIE('01.004.823/001-12', 'AC')).toBe(true);
      expect(isValidIE('01.000.000.004-06', 'AC')).toBe(true); // dv >= 10
      expect(isValidIE('0100482300113', 'AC')).toBe(false);
    });

    it('AL', () => {
      expect(isValidIE('240048237', 'AL')).toBe(true);
      expect(isValidIE('240048235', 'AL')).toBe(false);
    });

    it('AP', () => {
      expect(isValidIE('03.012.345-9', 'AP')).toBe(true); // Range 1 (p=5, d=0)
      expect(isValidIE('03018001-7', 'AP')).toBe(true); // Range 2 (p=9, d=1)
      expect(isValidIE('030123458', 'AP')).toBe(false);
    });

    it('AM', () => {
      expect(isValidIE('04.004.823-3', 'AM')).toBe(true);
      expect(isValidIE('040048232', 'AM')).toBe(false);
    });

    it('BA', () => {
      expect(isValidIE('123456-36', 'BA')).toBe(true); // 8 digits, Module 10
      expect(isValidIE('612345-75', 'BA')).toBe(true); // 8 digits, Module 11
      expect(isValidIE('1234567-84', 'BA')).toBe(true); // 9 digits, Module 10
      expect(isValidIE('160000130', 'BA')).toBe(true); // 9 digits, Module 11
      expect(isValidIE('1000003-06', 'BA')).toBe(false);
    });

    it('CE', () => {
      expect(isValidIE('06000001-5', 'CE')).toBe(true);
      expect(isValidIE('060000014', 'CE')).toBe(false);
    });

    it('DF', () => {
      expect(isValidIE('07300001001-09', 'DF')).toBe(true);
      expect(isValidIE('0730000100108', 'DF')).toBe(false);
    });

    it('ES', () => {
      expect(isValidIE('082.444.33-1', 'ES')).toBe(true);
      expect(isValidIE('082444333', 'ES')).toBe(false);
    });

    it('GO', () => {
      expect(isValidIE('10.987.654-7', 'GO')).toBe(true);
      expect(isValidIE('10.103.105-1', 'GO')).toBe(true); // Special case remainder 1
      expect(isValidIE('11.094.402-1', 'GO')).toBe(true); // Hardcoded case
      expect(isValidIE('11.094.402-0', 'GO')).toBe(true); // Hardcoded case
      expect(isValidIE('109876546', 'GO')).toBe(false);
    });

    it('MA', () => {
      expect(isValidIE('12000001-6', 'MA')).toBe(true);
      expect(isValidIE('120000015', 'MA')).toBe(false);
    });

    it('MT', () => {
      expect(isValidIE('0013000001-9', 'MT')).toBe(true);
      expect(isValidIE('00130000018', 'MT')).toBe(false);
    });

    it('MS', () => {
      expect(isValidIE('28000001-4', 'MS')).toBe(true);
      expect(isValidIE('280000017', 'MS')).toBe(false);
    });

    it('MG', () => {
      expect(isValidIE('062.307.904/0081', 'MG')).toBe(true);
      expect(isValidIE('000.000.000.000.0', 'MG')).toBe(true); // Remainder < 2
      expect(isValidIE('0623079040082', 'MG')).toBe(false);
    });

    it('PA', () => {
      expect(isValidIE('15-000001-4', 'PA')).toBe(true);
      expect(isValidIE('150000012', 'PA')).toBe(false);
    });

    it('PB', () => {
      expect(isValidIE('00000001-9', 'PB')).toBe(true);
      expect(isValidIE('000000015', 'PB')).toBe(false);
    });

    it('PR', () => {
      expect(isValidIE('123.45678-50', 'PR')).toBe(true);
      expect(isValidIE('1234567851', 'PR')).toBe(false);
    });

    it('PE', () => {
      expect(isValidIE('0321418-40', 'PE')).toBe(true);
      expect(isValidIE('032141841', 'PE')).toBe(false);
    });

    it('PI', () => {
      expect(isValidIE('012345679', 'PI')).toBe(true);
      expect(isValidIE('012345678', 'PI')).toBe(false);
    });

    it('RJ', () => {
      expect(isValidIE('01.234.56-0', 'RJ')).toBe(true);
      expect(isValidIE('01234562', 'RJ')).toBe(false);
    });

    it('RN', () => {
      expect(isValidIE('20.0.040.040-0', 'RN')).toBe(true); // 10 digits
      expect(isValidIE('20.040.040-1', 'RN')).toBe(true); // 9 digits
      expect(isValidIE('20.0.040.040-2', 'RN')).toBe(false);
    });

    it('RS', () => {
      expect(isValidIE('224/0000010', 'RS')).toBe(true);
      expect(isValidIE('2240000017', 'RS')).toBe(false);
    });

    it('RO', () => {
      expect(isValidIE('101.62521-1', 'RO')).toBe(true);
      expect(isValidIE('101625213', 'RO')).toBe(false);
    });

    it('RR', () => {
      expect(isValidIE('24000001-0', 'RR')).toBe(true);
      expect(isValidIE('240000018', 'RR')).toBe(false);
    });

    it('SC', () => {
      expect(isValidIE('251.040.852', 'SC')).toBe(true);
      expect(isValidIE('251040853', 'SC')).toBe(false);
    });

    it('SP', () => {
      expect(isValidIE('110.042.490.114', 'SP')).toBe(true);
      expect(isValidIE('P-01100424.3/002', 'SP')).toBe(true);
      expect(isValidIE('110042490115', 'SP')).toBe(false);
      expect(isValidIE('P-01100424.4/003', 'SP')).toBe(false);
    });

    it('SE', () => {
      expect(isValidIE('12345678-9', 'SE')).toBe(true);
      expect(isValidIE('12345678-0', 'SE')).toBe(false);
    });

    it('TO', () => {
      expect(isValidIE('29010227836', 'TO')).toBe(true);
      expect(isValidIE('29010227837', 'TO')).toBe(false);
    });

    it('deve cobrir caminhos de erro para todas as UFs', () => {
      const ufs = [
        'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 
        'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 
        'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
      ];
      
      ufs.forEach(uf => {
        // Testa comprimento inválido
        expect(isValidIE('1', uf)).toBe(false);
        // Testa prefixo inválido (onde aplicável)
        expect(isValidIE('9999999999999', uf)).toBe(false);
      });
    });
  });
});
