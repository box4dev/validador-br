import { describe, it } from 'node:test';
import assert from 'node:assert';
import { isValidIE } from './index.js';

describe('Validador de Inscrição Estadual', () => {
  it('deve retornar false para UF inválida', () => {
    assert.strictEqual(isValidIE('123456789', 'XX'), false);
    assert.strictEqual(isValidIE('abc', 'SP'), false); // Caso não numérico
  });

  describe('por estado', () => {
    it('AC', () => {
      assert.strictEqual(isValidIE('01.004.823/001-12', 'AC'), true);
      assert.strictEqual(isValidIE('01.000.000.004-06', 'AC'), true); // dv >= 10
      assert.strictEqual(isValidIE('0100482300113', 'AC'), false);
    });

    it('AL', () => {
      assert.strictEqual(isValidIE('240048237', 'AL'), true);
      assert.strictEqual(isValidIE('240048235', 'AL'), false);
    });

    it('AP', () => {
      assert.strictEqual(isValidIE('03.012.345-9', 'AP'), true); // Range 1 (p=5, d=0)
      assert.strictEqual(isValidIE('03018001-7', 'AP'), true); // Range 2 (p=9, d=1)
      assert.strictEqual(isValidIE('030123458', 'AP'), false);
    });

    it('AM', () => {
      assert.strictEqual(isValidIE('04.004.823-3', 'AM'), true);
      assert.strictEqual(isValidIE('040048232', 'AM'), false);
    });

    it('BA', () => {
      assert.strictEqual(isValidIE('123456-36', 'BA'), true); // 8 digits, Module 10
      assert.strictEqual(isValidIE('612345-75', 'BA'), true); // 8 digits, Module 11
      assert.strictEqual(isValidIE('1234567-84', 'BA'), true); // 9 digits, Module 10
      assert.strictEqual(isValidIE('160000130', 'BA'), true); // 9 digits, Module 11
      assert.strictEqual(isValidIE('1000003-06', 'BA'), false);
    });

    it('CE', () => {
      assert.strictEqual(isValidIE('06000001-5', 'CE'), true);
      assert.strictEqual(isValidIE('060000014', 'CE'), false);
    });

    it('DF', () => {
      assert.strictEqual(isValidIE('07300001001-09', 'DF'), true);
      assert.strictEqual(isValidIE('0730000100108', 'DF'), false);
    });

    it('ES', () => {
      assert.strictEqual(isValidIE('082.444.33-1', 'ES'), true);
      assert.strictEqual(isValidIE('082444333', 'ES'), false);
    });

    it('GO', () => {
      assert.strictEqual(isValidIE('10.987.654-7', 'GO'), true);
      assert.strictEqual(isValidIE('10.103.105-1', 'GO'), true); // Special case remainder 1
      assert.strictEqual(isValidIE('11.094.402-1', 'GO'), true); // Hardcoded case
      assert.strictEqual(isValidIE('11.094.402-0', 'GO'), true); // Hardcoded case
      assert.strictEqual(isValidIE('109876546', 'GO'), false);
    });

    it('MA', () => {
      assert.strictEqual(isValidIE('12000001-6', 'MA'), true);
      assert.strictEqual(isValidIE('120000015', 'MA'), false);
    });

    it('MT', () => {
      assert.strictEqual(isValidIE('0013000001-9', 'MT'), true);
      assert.strictEqual(isValidIE('00130000018', 'MT'), false);
    });

    it('MS', () => {
      assert.strictEqual(isValidIE('28000001-4', 'MS'), true);
      assert.strictEqual(isValidIE('280000017', 'MS'), false);
    });

    it('MG', () => {
      assert.strictEqual(isValidIE('062.307.904/0081', 'MG'), true);
      assert.strictEqual(isValidIE('000.000.000.000.0', 'MG'), true); // Remainder < 2
      assert.strictEqual(isValidIE('0623079040082', 'MG'), false);
    });

    it('PA', () => {
      assert.strictEqual(isValidIE('15-000001-4', 'PA'), true);
      assert.strictEqual(isValidIE('150000012', 'PA'), false);
    });

    it('PB', () => {
      assert.strictEqual(isValidIE('00000001-9', 'PB'), true);
      assert.strictEqual(isValidIE('000000015', 'PB'), false);
    });

    it('PR', () => {
      assert.strictEqual(isValidIE('123.45678-50', 'PR'), true);
      assert.strictEqual(isValidIE('1234567851', 'PR'), false);
    });

    it('PE', () => {
      assert.strictEqual(isValidIE('0321418-40', 'PE'), true);
      assert.strictEqual(isValidIE('032141841', 'PE'), false);
    });

    it('PI', () => {
      assert.strictEqual(isValidIE('012345679', 'PI'), true);
      assert.strictEqual(isValidIE('012345678', 'PI'), false);
    });

    it('RJ', () => {
      assert.strictEqual(isValidIE('01.234.56-0', 'RJ'), true);
      assert.strictEqual(isValidIE('01234562', 'RJ'), false);
    });

    it('RN', () => {
      assert.strictEqual(isValidIE('20.0.040.040-0', 'RN'), true); // 10 digits
      assert.strictEqual(isValidIE('20.040.040-1', 'RN'), true); // 9 digits
      assert.strictEqual(isValidIE('20.0.040.040-2', 'RN'), false);
    });

    it('RS', () => {
      assert.strictEqual(isValidIE('224/0000010', 'RS'), true);
      assert.strictEqual(isValidIE('2240000017', 'RS'), false);
    });

    it('RO', () => {
      assert.strictEqual(isValidIE('101.62521-1', 'RO'), true);
      assert.strictEqual(isValidIE('101625213', 'RO'), false);
    });

    it('RR', () => {
      assert.strictEqual(isValidIE('24000001-0', 'RR'), true);
      assert.strictEqual(isValidIE('240000018', 'RR'), false);
    });

    it('SC', () => {
      assert.strictEqual(isValidIE('251.040.852', 'SC'), true);
      assert.strictEqual(isValidIE('251040853', 'SC'), false);
    });

    it('SP', () => {
      assert.strictEqual(isValidIE('110.042.490.114', 'SP'), true);
      assert.strictEqual(isValidIE('P-01100424.3/002', 'SP'), true);
      assert.strictEqual(isValidIE('110042490115', 'SP'), false);
      assert.strictEqual(isValidIE('P-01100424.4/003', 'SP'), false);
    });

    it('SE', () => {
      assert.strictEqual(isValidIE('12345678-9', 'SE'), true);
      assert.strictEqual(isValidIE('12345678-0', 'SE'), false);
    });

    it('TO', () => {
      assert.strictEqual(isValidIE('29010227836', 'TO'), true);
      assert.strictEqual(isValidIE('29010227837', 'TO'), false);
    });

    it('deve cobrir caminhos de erro para todas as UFs', () => {
      const ufs = [
        'AC',
        'AL',
        'AM',
        'AP',
        'BA',
        'CE',
        'DF',
        'ES',
        'GO',
        'MA',
        'MT',
        'MS',
        'MG',
        'PA',
        'PB',
        'PR',
        'PE',
        'PI',
        'RJ',
        'RN',
        'RS',
        'RO',
        'RR',
        'SC',
        'SP',
        'SE',
        'TO',
      ];

      ufs.forEach((uf) => {
        // Testa comprimento inválido
        assert.strictEqual(isValidIE('1', uf), false);
        // Testa prefixo inválido (onde aplicável)
        assert.strictEqual(isValidIE('9999999999999', uf), false);
      });
    });
  });
});
