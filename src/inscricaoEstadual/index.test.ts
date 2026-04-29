import { describe, it, expect } from 'vitest';
import { isValidInscricaoEstadual } from './index.js';

describe('Validador de Inscrição Estadual', () => {
  it('deve retornar false para UF inválida', () => {
    expect(isValidInscricaoEstadual('123456789', 'XX')).toBe(false);
    expect(isValidInscricaoEstadual('abc', 'SP')).toBe(false); // Caso não numérico
  });

  describe('por estado', () => {
    it('AC', () => {
      expect(isValidInscricaoEstadual('01.004.823/001-12', 'AC')).toBe(true);
      expect(isValidInscricaoEstadual('01.000.000.004-06', 'AC')).toBe(true); // dv >= 10
      expect(isValidInscricaoEstadual('0100482300113', 'AC')).toBe(false);
    });

    it('AL', () => {
      expect(isValidInscricaoEstadual('240048237', 'AL')).toBe(true);
      expect(isValidInscricaoEstadual('240048235', 'AL')).toBe(false);
    });

    it('AP', () => {
      expect(isValidInscricaoEstadual('03.012.345-9', 'AP')).toBe(true); // Range 1 (p=5, d=0)
      expect(isValidInscricaoEstadual('03018001-7', 'AP')).toBe(true); // Range 2 (p=9, d=1)
      expect(isValidInscricaoEstadual('030123458', 'AP')).toBe(false);
    });

    it('AM', () => {
      expect(isValidInscricaoEstadual('04.004.823-3', 'AM')).toBe(true);
      expect(isValidInscricaoEstadual('040048232', 'AM')).toBe(false);
    });

    it('BA', () => {
      expect(isValidInscricaoEstadual('123456-36', 'BA')).toBe(true); // 8 digits, Module 10
      expect(isValidInscricaoEstadual('612345-75', 'BA')).toBe(true); // 8 digits, Module 11
      expect(isValidInscricaoEstadual('1234567-84', 'BA')).toBe(true); // 9 digits, Module 10
      expect(isValidInscricaoEstadual('160000130', 'BA')).toBe(true); // 9 digits, Module 11
      expect(isValidInscricaoEstadual('1000003-06', 'BA')).toBe(false);
    });

    it('CE', () => {
      expect(isValidInscricaoEstadual('06000001-5', 'CE')).toBe(true);
      expect(isValidInscricaoEstadual('060000014', 'CE')).toBe(false);
    });

    it('DF', () => {
      expect(isValidInscricaoEstadual('07300001001-09', 'DF')).toBe(true);
      expect(isValidInscricaoEstadual('0730000100108', 'DF')).toBe(false);
    });

    it('ES', () => {
      expect(isValidInscricaoEstadual('082.444.33-1', 'ES')).toBe(true);
      expect(isValidInscricaoEstadual('082444333', 'ES')).toBe(false);
    });

    it('GO', () => {
      expect(isValidInscricaoEstadual('10.987.654-7', 'GO')).toBe(true);
      expect(isValidInscricaoEstadual('10.103.105-1', 'GO')).toBe(true); // Special case remainder 1
      expect(isValidInscricaoEstadual('11.094.402-1', 'GO')).toBe(true); // Hardcoded case
      expect(isValidInscricaoEstadual('11.094.402-0', 'GO')).toBe(true); // Hardcoded case
      expect(isValidInscricaoEstadual('109876546', 'GO')).toBe(false);
    });

    it('MA', () => {
      expect(isValidInscricaoEstadual('12000001-6', 'MA')).toBe(true);
      expect(isValidInscricaoEstadual('120000015', 'MA')).toBe(false);
    });

    it('MT', () => {
      expect(isValidInscricaoEstadual('0013000001-9', 'MT')).toBe(true);
      expect(isValidInscricaoEstadual('00130000018', 'MT')).toBe(false);
    });

    it('MS', () => {
      expect(isValidInscricaoEstadual('28000001-4', 'MS')).toBe(true);
      expect(isValidInscricaoEstadual('280000017', 'MS')).toBe(false);
    });

    it('MG', () => {
      expect(isValidInscricaoEstadual('062.307.904/0081', 'MG')).toBe(true);
      expect(isValidInscricaoEstadual('000.000.000.000.0', 'MG')).toBe(true); // Remainder < 2
      expect(isValidInscricaoEstadual('0623079040082', 'MG')).toBe(false);
    });

    it('PA', () => {
      expect(isValidInscricaoEstadual('15-000001-4', 'PA')).toBe(true);
      expect(isValidInscricaoEstadual('150000012', 'PA')).toBe(false);
    });

    it('PB', () => {
      expect(isValidInscricaoEstadual('00000001-9', 'PB')).toBe(true);
      expect(isValidInscricaoEstadual('000000015', 'PB')).toBe(false);
    });

    it('PR', () => {
      expect(isValidInscricaoEstadual('123.45678-50', 'PR')).toBe(true);
      expect(isValidInscricaoEstadual('1234567851', 'PR')).toBe(false);
    });

    it('PE', () => {
      expect(isValidInscricaoEstadual('0321418-40', 'PE')).toBe(true);
      expect(isValidInscricaoEstadual('032141841', 'PE')).toBe(false);
    });

    it('PI', () => {
      expect(isValidInscricaoEstadual('012345679', 'PI')).toBe(true);
      expect(isValidInscricaoEstadual('012345678', 'PI')).toBe(false);
    });

    it('RJ', () => {
      expect(isValidInscricaoEstadual('01.234.56-0', 'RJ')).toBe(true);
      expect(isValidInscricaoEstadual('01234562', 'RJ')).toBe(false);
    });

    it('RN', () => {
      expect(isValidInscricaoEstadual('20.0.040.040-0', 'RN')).toBe(true); // 10 digits
      expect(isValidInscricaoEstadual('20.040.040-1', 'RN')).toBe(true); // 9 digits
      expect(isValidInscricaoEstadual('20.0.040.040-2', 'RN')).toBe(false);
    });

    it('RS', () => {
      expect(isValidInscricaoEstadual('224/0000010', 'RS')).toBe(true);
      expect(isValidInscricaoEstadual('2240000017', 'RS')).toBe(false);
    });

    it('RO', () => {
      expect(isValidInscricaoEstadual('101.62521-1', 'RO')).toBe(true);
      expect(isValidInscricaoEstadual('101625213', 'RO')).toBe(false);
    });

    it('RR', () => {
      expect(isValidInscricaoEstadual('24000001-0', 'RR')).toBe(true);
      expect(isValidInscricaoEstadual('240000018', 'RR')).toBe(false);
    });

    it('SC', () => {
      expect(isValidInscricaoEstadual('251.040.852', 'SC')).toBe(true);
      expect(isValidInscricaoEstadual('251040853', 'SC')).toBe(false);
    });

    it('SP', () => {
      expect(isValidInscricaoEstadual('110.042.490.114', 'SP')).toBe(true);
      expect(isValidInscricaoEstadual('P-01100424.3/002', 'SP')).toBe(true);
      expect(isValidInscricaoEstadual('110042490115', 'SP')).toBe(false);
      expect(isValidInscricaoEstadual('P-01100424.4/003', 'SP')).toBe(false);
    });

    it('SE', () => {
      expect(isValidInscricaoEstadual('12345678-9', 'SE')).toBe(true);
      expect(isValidInscricaoEstadual('12345678-0', 'SE')).toBe(false);
    });

    it('TO', () => {
      expect(isValidInscricaoEstadual('29010227836', 'TO')).toBe(true);
      expect(isValidInscricaoEstadual('29010227837', 'TO')).toBe(false);
    });

    it('deve cobrir caminhos de erro para todas as UFs', () => {
      const ufs = [
        'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 
        'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 
        'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
      ];
      
      ufs.forEach(uf => {
        // Testa comprimento inválido
        expect(isValidInscricaoEstadual('1', uf)).toBe(false);
        // Testa prefixo inválido (onde aplicável)
        expect(isValidInscricaoEstadual('9999999999999', uf)).toBe(false);
      });
    });
  });
});
