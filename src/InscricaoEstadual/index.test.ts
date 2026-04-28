import { describe, it, expect } from 'vitest';
import { inscricaoEstadual } from './index.js';

describe('Validador de Inscrição Estadual', () => {
  it('deve retornar false para UF inválida', () => {
    expect(inscricaoEstadual('123456789', 'XX')).toBe(false);
    expect(inscricaoEstadual('abc', 'SP')).toBe(false); // Caso não numérico
  });

  describe('por estado', () => {
    it('AC', () => {
      expect(inscricaoEstadual('01.004.823/001-12', 'AC')).toBe(true);
      expect(inscricaoEstadual('01.000.000.004-06', 'AC')).toBe(true); // dv >= 10
      expect(inscricaoEstadual('0100482300113', 'AC')).toBe(false);
    });

    it('AL', () => {
      expect(inscricaoEstadual('240048237', 'AL')).toBe(true);
      expect(inscricaoEstadual('240048235', 'AL')).toBe(false);
    });

    it('AP', () => {
      expect(inscricaoEstadual('03.012.345-9', 'AP')).toBe(true); // Range 1 (p=5, d=0)
      expect(inscricaoEstadual('03018001-7', 'AP')).toBe(true); // Range 2 (p=9, d=1)
      expect(inscricaoEstadual('030123458', 'AP')).toBe(false);
    });

    it('AM', () => {
      expect(inscricaoEstadual('04.004.823-3', 'AM')).toBe(true);
      expect(inscricaoEstadual('040048232', 'AM')).toBe(false);
    });

    it('BA', () => {
      expect(inscricaoEstadual('123456-36', 'BA')).toBe(true); // 8 digits, Module 10
      expect(inscricaoEstadual('612345-75', 'BA')).toBe(true); // 8 digits, Module 11
      expect(inscricaoEstadual('1234567-84', 'BA')).toBe(true); // 9 digits, Module 10
      expect(inscricaoEstadual('160000130', 'BA')).toBe(true); // 9 digits, Module 11
      expect(inscricaoEstadual('1000003-06', 'BA')).toBe(false);
    });

    it('CE', () => {
      expect(inscricaoEstadual('06000001-5', 'CE')).toBe(true);
      expect(inscricaoEstadual('060000014', 'CE')).toBe(false);
    });

    it('DF', () => {
      expect(inscricaoEstadual('07300001001-09', 'DF')).toBe(true);
      expect(inscricaoEstadual('0730000100108', 'DF')).toBe(false);
    });

    it('ES', () => {
      expect(inscricaoEstadual('082.444.33-1', 'ES')).toBe(true);
      expect(inscricaoEstadual('082444333', 'ES')).toBe(false);
    });

    it('GO', () => {
      expect(inscricaoEstadual('10.987.654-7', 'GO')).toBe(true);
      expect(inscricaoEstadual('10.103.105-1', 'GO')).toBe(true); // Special case remainder 1
      expect(inscricaoEstadual('11.094.402-1', 'GO')).toBe(true); // Hardcoded case
      expect(inscricaoEstadual('11.094.402-0', 'GO')).toBe(true); // Hardcoded case
      expect(inscricaoEstadual('109876546', 'GO')).toBe(false);
    });

    it('MA', () => {
      expect(inscricaoEstadual('12000001-6', 'MA')).toBe(true);
      expect(inscricaoEstadual('120000015', 'MA')).toBe(false);
    });

    it('MT', () => {
      expect(inscricaoEstadual('0013000001-9', 'MT')).toBe(true);
      expect(inscricaoEstadual('00130000018', 'MT')).toBe(false);
    });

    it('MS', () => {
      expect(inscricaoEstadual('28000001-4', 'MS')).toBe(true);
      expect(inscricaoEstadual('280000017', 'MS')).toBe(false);
    });

    it('MG', () => {
      expect(inscricaoEstadual('062.307.904/0081', 'MG')).toBe(true);
      expect(inscricaoEstadual('000.000.000.000.0', 'MG')).toBe(true); // Remainder < 2
      expect(inscricaoEstadual('0623079040082', 'MG')).toBe(false);
    });

    it('PA', () => {
      expect(inscricaoEstadual('15-000001-4', 'PA')).toBe(true);
      expect(inscricaoEstadual('150000012', 'PA')).toBe(false);
    });

    it('PB', () => {
      expect(inscricaoEstadual('00000001-9', 'PB')).toBe(true);
      expect(inscricaoEstadual('000000015', 'PB')).toBe(false);
    });

    it('PR', () => {
      expect(inscricaoEstadual('123.45678-50', 'PR')).toBe(true);
      expect(inscricaoEstadual('1234567851', 'PR')).toBe(false);
    });

    it('PE', () => {
      expect(inscricaoEstadual('0321418-40', 'PE')).toBe(true);
      expect(inscricaoEstadual('032141841', 'PE')).toBe(false);
    });

    it('PI', () => {
      expect(inscricaoEstadual('012345679', 'PI')).toBe(true);
      expect(inscricaoEstadual('012345678', 'PI')).toBe(false);
    });

    it('RJ', () => {
      expect(inscricaoEstadual('01.234.56-0', 'RJ')).toBe(true);
      expect(inscricaoEstadual('01234562', 'RJ')).toBe(false);
    });

    it('RN', () => {
      expect(inscricaoEstadual('20.0.040.040-0', 'RN')).toBe(true); // 10 digits
      expect(inscricaoEstadual('20.040.040-1', 'RN')).toBe(true); // 9 digits
      expect(inscricaoEstadual('20.0.040.040-2', 'RN')).toBe(false);
    });

    it('RS', () => {
      expect(inscricaoEstadual('224/0000010', 'RS')).toBe(true);
      expect(inscricaoEstadual('2240000017', 'RS')).toBe(false);
    });

    it('RO', () => {
      expect(inscricaoEstadual('101.62521-1', 'RO')).toBe(true);
      expect(inscricaoEstadual('101625213', 'RO')).toBe(false);
    });

    it('RR', () => {
      expect(inscricaoEstadual('24000001-0', 'RR')).toBe(true);
      expect(inscricaoEstadual('240000018', 'RR')).toBe(false);
    });

    it('SC', () => {
      expect(inscricaoEstadual('251.040.852', 'SC')).toBe(true);
      expect(inscricaoEstadual('251040853', 'SC')).toBe(false);
    });

    it('SP', () => {
      expect(inscricaoEstadual('110.042.490.114', 'SP')).toBe(true);
      expect(inscricaoEstadual('P-01100424.3/002', 'SP')).toBe(true);
      expect(inscricaoEstadual('110042490115', 'SP')).toBe(false);
      expect(inscricaoEstadual('P-01100424.4/003', 'SP')).toBe(false);
    });

    it('SE', () => {
      expect(inscricaoEstadual('12345678-9', 'SE')).toBe(true);
      expect(inscricaoEstadual('12345678-0', 'SE')).toBe(false);
    });

    it('TO', () => {
      expect(inscricaoEstadual('29010227836', 'TO')).toBe(true);
      expect(inscricaoEstadual('29010227837', 'TO')).toBe(false);
    });

    it('deve cobrir caminhos de erro para todas as UFs', () => {
      const ufs = [
        'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 
        'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 
        'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
      ];
      
      ufs.forEach(uf => {
        // Testa comprimento inválido
        expect(inscricaoEstadual('1', uf)).toBe(false);
        // Testa prefixo inválido (onde aplicável)
        expect(inscricaoEstadual('9999999999999', uf)).toBe(false);
      });
    });
  });
});
