import { clean } from '../utils/clean.js';

type Validator = (ie: string) => boolean;

const validators: Record<string, Validator> = {
  AC: (ie) => {
    if (ie.length !== 13 || !ie.startsWith('01')) return false;
    const base = ie.substring(0, 11);
    const weights1 = [4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    let sum = base.split('').reduce((acc, digit, i) => acc + parseInt(digit, 10) * weights1[i], 0);
    let dv1 = 11 - (sum % 11);
    if (dv1 >= 10) dv1 = 0;
    if (dv1 !== parseInt(ie[11], 10)) return false;

    const weights2 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    sum = (ie.substring(0, 12)).split('').reduce((acc, digit, i) => acc + parseInt(digit, 10) * weights2[i], 0);
    let dv2 = 11 - (sum % 11);
    if (dv2 >= 10) dv2 = 0;
    return dv2 === parseInt(ie[12], 10);
  },

  AL: (ie) => {
    if (ie.length !== 9 || !ie.startsWith('24')) return false;
    const weights = [9, 8, 7, 6, 5, 4, 3, 2];
    const sum = (ie.substring(0, 8)).split('').reduce((acc, digit, i) => acc + parseInt(digit, 10) * weights[i], 0);
    const remainder = (sum * 10) % 11;
    const dv = remainder === 10 ? 0 : remainder;
    return dv === parseInt(ie[8], 10);
  },

  AP: (ie) => {
    if (ie.length !== 9 || !ie.startsWith('03')) return false;
    const base = ie.substring(0, 8);
    const weights = [9, 8, 7, 6, 5, 4, 3, 2];
    let p = 0, d = 0;
    const num = parseInt(base, 10);
    if (num >= 3000001 && num <= 3017000) { p = 5; d = 0; }
    else if (num >= 3017001 && num <= 3019022) { p = 9; d = 1; }
    const sum = p + base.split('').reduce((acc, digit, i) => acc + parseInt(digit, 10) * weights[i], 0);
    const remainder = sum % 11;
    let dv = 11 - remainder;
    if (dv === 10) dv = 0;
    else if (dv === 11) dv = d;
    return dv === parseInt(ie[8], 10);
  },

  AM: (ie) => {
    if (ie.length !== 9) return false;
    const weights = [9, 8, 7, 6, 5, 4, 3, 2];
    const sum = (ie.substring(0, 8)).split('').reduce((acc, digit, i) => acc + parseInt(digit, 10) * weights[i], 0);
    if (sum < 11) return (11 - sum) === parseInt(ie[8], 10);
    const remainder = sum % 11;
    const dv = remainder <= 1 ? 0 : 11 - remainder;
    return dv === parseInt(ie[8], 10);
  },

  BA: (ie) => {
    if (ie.length !== 8 && ie.length !== 9) return false;
    const base = ie.substring(0, ie.length - 2);
    const module = '679'.includes(ie[ie.length === 9 ? 1 : 0]) ? 11 : 10;

    const weights1 = ie.length === 8 ? [7, 6, 5, 4, 3, 2] : [8, 7, 6, 5, 4, 3, 2];
    let sum = base.split('').reduce((acc, digit, i) => acc + parseInt(digit, 10) * weights1[i], 0);
    let remainder = sum % module;
    const dv1 = remainder === 0 ? 0 : module - remainder;
    if (dv1 !== parseInt(ie[ie.length - 2], 10)) return false;

    const weights2 = ie.length === 8 ? [8, 7, 6, 5, 4, 3, 2] : [9, 8, 7, 6, 5, 4, 3, 2];
    sum = (base + dv1).split('').reduce((acc, digit, i) => acc + parseInt(digit, 10) * weights2[i], 0);
    remainder = sum % module;
    const dv2 = remainder === 0 ? 0 : module - remainder;
    return dv2 === parseInt(ie[ie.length - 1], 10);
  },

  CE: (ie) => {
    if (ie.length !== 9) return false;
    const weights = [9, 8, 7, 6, 5, 4, 3, 2];
    const sum = (ie.substring(0, 8)).split('').reduce((acc, digit, i) => acc + parseInt(digit, 10) * weights[i], 0);
    const remainder = sum % 11;
    const dv = remainder > 1 ? 11 - remainder : 0;
    return dv === parseInt(ie[8], 10);
  },

  DF: (ie) => {
    if (ie.length !== 13 || !ie.startsWith('07')) return false;
    const base = ie.substring(0, 11);
    const weights1 = [4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    let sum = base.split('').reduce((acc, digit, i) => acc + parseInt(digit, 10) * weights1[i], 0);
    let dv1 = 11 - (sum % 11);
    if (dv1 >= 10) dv1 = 0;
    if (dv1 !== parseInt(ie[11], 10)) return false;

    const weights2 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    sum = (ie.substring(0, 12)).split('').reduce((acc, digit, i) => acc + parseInt(digit, 10) * weights2[i], 0);
    let dv2 = 11 - (sum % 11);
    if (dv2 >= 10) dv2 = 0;
    return dv2 === parseInt(ie[12], 10);
  },

  ES: (ie) => {
    if (ie.length !== 9) return false;
    const weights = [9, 8, 7, 6, 5, 4, 3, 2];
    const sum = (ie.substring(0, 8)).split('').reduce((acc, digit, i) => acc + parseInt(digit, 10) * weights[i], 0);
    const remainder = sum % 11;
    const dv = remainder < 2 ? 0 : 11 - remainder;
    return dv === parseInt(ie[8], 10);
  },

  GO: (ie) => {
    if (ie.length !== 9) return false;
    const prefix = ie.substring(0, 2);
    if (!['10', '11', '15'].includes(prefix)) return false;
    const base = ie.substring(0, 8);
    if (base === '11094402') return ['0', '1'].includes(ie[8]);
    const weights = [9, 8, 7, 6, 5, 4, 3, 2];
    const sum = base.split('').reduce((acc, digit, i) => acc + parseInt(digit, 10) * weights[i], 0);
    const remainder = sum % 11;
    if (remainder === 0) return parseInt(ie[8], 10) === 0;
    if (remainder === 1) {
      const num = parseInt(base, 10);
      return parseInt(ie[8], 10) === (num >= 10103105 && num <= 10119997 ? 1 : 0);
    }
    return (11 - remainder) === parseInt(ie[8], 10);
  },

  MA: (ie) => {
    if (ie.length !== 9 || !ie.startsWith('12')) return false;
    const weights = [9, 8, 7, 6, 5, 4, 3, 2];
    const sum = (ie.substring(0, 8)).split('').reduce((acc, digit, i) => acc + parseInt(digit, 10) * weights[i], 0);
    const remainder = sum % 11;
    const dv = remainder < 2 ? 0 : 11 - remainder;
    return dv === parseInt(ie[8], 10);
  },

  MT: (ie) => {
    if (ie.length !== 11) return false;
    const weights = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const sum = (ie.substring(0, 10)).split('').reduce((acc, digit, i) => acc + parseInt(digit, 10) * weights[i], 0);
    const remainder = sum % 11;
    const dv = remainder < 2 ? 0 : 11 - remainder;
    return dv === parseInt(ie[10], 10);
  },

  MS: (ie) => {
    if (ie.length !== 9 || !ie.startsWith('28')) return false;
    const weights = [9, 8, 7, 6, 5, 4, 3, 2];
    const sum = (ie.substring(0, 8)).split('').reduce((acc, digit, i) => acc + parseInt(digit, 10) * weights[i], 0);
    const remainder = sum % 11;
    const dv = remainder === 0 ? 0 : (11 - remainder >= 10 ? 0 : 11 - remainder);
    return dv === parseInt(ie[8], 10);
  },

  MG: (ie) => {
    if (ie.length !== 13) return false;
    const newBase = ie.substring(0, 3) + '0' + ie.substring(3, 11);
    const weights1 = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
    const sum1 = newBase.split('').reduce((acc, digit, i) => {
      const product = parseInt(digit, 10) * weights1[i];
      return acc + Math.floor(product / 10) + (product % 10);
    }, 0);
    const dv1 = (10 - (sum1 % 10)) % 10;
    if (dv1 !== parseInt(ie[11], 10)) return false;

    const weights2 = [3, 2, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
    const sum2 = (ie.substring(0, 12)).split('').reduce((acc, digit, i) => acc + parseInt(digit, 10) * weights2[i], 0);
    const remainder2 = sum2 % 11;
    const dv2 = remainder2 < 2 ? 0 : 11 - remainder2;
    return dv2 === parseInt(ie[12], 10);
  },

  PA: (ie) => {
    if (ie.length !== 9 || !ie.startsWith('15')) return false;
    const weights = [9, 8, 7, 6, 5, 4, 3, 2];
    const sum = (ie.substring(0, 8)).split('').reduce((acc, digit, i) => acc + parseInt(digit, 10) * weights[i], 0);
    const remainder = sum % 11;
    const dv = remainder < 2 ? 0 : 11 - remainder;
    return dv === parseInt(ie[8], 10);
  },

  PB: (ie) => {
    if (ie.length !== 9) return false;
    const weights = [9, 8, 7, 6, 5, 4, 3, 2];
    const sum = (ie.substring(0, 8)).split('').reduce((acc, digit, i) => acc + parseInt(digit, 10) * weights[i], 0);
    const remainder = sum % 11;
    const dv = remainder > 1 ? 11 - remainder : 0;
    return dv === parseInt(ie[8], 10);
  },

  PR: (ie) => {
    if (ie.length !== 10) return false;
    const weights1 = [3, 2, 7, 6, 5, 4, 3, 2];
    let sum = (ie.substring(0, 8)).split('').reduce((acc, digit, i) => acc + parseInt(digit, 10) * weights1[i], 0);
    const remainder1 = sum % 11;
    const dv1 = remainder1 < 2 ? 0 : 11 - remainder1;
    if (dv1 !== parseInt(ie[8], 10)) return false;

    const weights2 = [4, 3, 2, 7, 6, 5, 4, 3, 2];
    sum = (ie.substring(0, 9)).split('').reduce((acc, digit, i) => acc + parseInt(digit, 10) * weights2[i], 0);
    const remainder2 = sum % 11;
    const dv2 = remainder2 < 2 ? 0 : 11 - remainder2;
    return dv2 === parseInt(ie[9], 10);
  },

  PE: (ie) => {
    if (ie.length !== 9) return false;
    const weights1 = [8, 7, 6, 5, 4, 3, 2];
    let sum = (ie.substring(0, 7)).split('').reduce((acc, digit, i) => acc + parseInt(digit, 10) * weights1[i], 0);
    const remainder1 = sum % 11;
    const dv1 = remainder1 < 2 ? 0 : 11 - remainder1;
    if (dv1 !== parseInt(ie[7], 10)) return false;

    const weights2 = [9, 8, 7, 6, 5, 4, 3, 2];
    sum = (ie.substring(0, 8)).split('').reduce((acc, digit, i) => acc + parseInt(digit, 10) * weights2[i], 0);
    const remainder2 = sum % 11;
    const dv2 = remainder2 < 2 ? 0 : 11 - remainder2;
    return dv2 === parseInt(ie[8], 10);
  },

  PI: (ie) => {
    if (ie.length !== 9) return false;
    const weights = [9, 8, 7, 6, 5, 4, 3, 2];
    const sum = (ie.substring(0, 8)).split('').reduce((acc, digit, i) => acc + parseInt(digit, 10) * weights[i], 0);
    const remainder = sum % 11;
    const dv = remainder < 2 ? 0 : 11 - remainder;
    return dv === parseInt(ie[8], 10);
  },

  RJ: (ie) => {
    if (ie.length !== 8) return false;
    const weights = [2, 7, 6, 5, 4, 3, 2];
    const sum = (ie.substring(0, 7)).split('').reduce((acc, digit, i) => acc + parseInt(digit, 10) * weights[i], 0);
    const remainder = sum % 11;
    const dv = remainder <= 1 ? 0 : 11 - remainder;
    return dv === parseInt(ie[7], 10);
  },

  RN: (ie) => {
    if (![9, 10].includes(ie.length) || !ie.startsWith('20')) return false;
    const base = ie.substring(0, ie.length - 1);
    const weights = ie.length === 9 ? [9, 8, 7, 6, 5, 4, 3, 2] : [10, 9, 8, 7, 6, 5, 4, 3, 2];
    const sum = base.split('').reduce((acc, digit, i) => acc + parseInt(digit, 10) * weights[i], 0);
    const remainder = (sum * 10) % 11;
    const dv = remainder === 10 ? 0 : remainder;
    return dv === parseInt(ie[ie.length - 1], 10);
  },

  RS: (ie) => {
    if (ie.length !== 10) return false;
    const weights = [2, 9, 8, 7, 6, 5, 4, 3, 2];
    const sum = (ie.substring(0, 9)).split('').reduce((acc, digit, i) => acc + parseInt(digit, 10) * weights[i], 0);
    const remainder = sum % 11;
    const dv = remainder < 2 ? 0 : 11 - remainder;
    return dv === parseInt(ie[9], 10);
  },

  RO: (ie) => {
    if (ie.length !== 9) return false;
    const weights = [6, 5, 4, 3, 2, 9, 8, 7];
    const sum = (ie.substring(0, 8)).split('').reduce((acc, digit, i) => acc + parseInt(digit, 10) * weights[i], 0);
    const remainder = sum % 11;
    const dv = remainder > 1 ? 11 - remainder : remainder;
    return dv === parseInt(ie[8], 10);
  },

  RR: (ie) => {
    if (ie.length !== 9 || !ie.startsWith('24')) return false;
    const weights = [1, 2, 3, 4, 5, 6, 7, 8];
    const sum = (ie.substring(0, 8)).split('').reduce((acc, digit, i) => acc + parseInt(digit, 10) * weights[i], 0);
    const dv = sum % 9;
    return dv === parseInt(ie[8], 10);
  },

  SC: (ie) => {
    if (ie.length !== 9) return false;
    const weights = [9, 8, 7, 6, 5, 4, 3, 2];
    const sum = (ie.substring(0, 8)).split('').reduce((acc, digit, i) => acc + parseInt(digit, 10) * weights[i], 0);
    const remainder = sum % 11;
    const dv = remainder < 2 ? 0 : 11 - remainder;
    return dv === parseInt(ie[8], 10);
  },

  SP: (ie) => {
    if (ie.startsWith('P')) {
      if (ie.length !== 13) return false;
      const base = ie.substring(1, 9);
      const weights = [1, 3, 4, 5, 6, 7, 8, 10];
      const sum = base.split('').reduce((acc, digit, i) => acc + parseInt(digit, 10) * weights[i], 0);
      const dv = (sum % 11) % 10;
      return dv === parseInt(ie[9], 10);
    }
    if (ie.length !== 12) return false;
    const weights1 = [1, 3, 4, 5, 6, 7, 8, 10];
    let sum = (ie.substring(0, 8)).split('').reduce((acc, digit, i) => acc + parseInt(digit, 10) * weights1[i], 0);
    const dv1 = (sum % 11) % 10;
    if (dv1 !== parseInt(ie[8], 10)) return false;

    const weights2 = [3, 2, 10, 9, 8, 7, 6, 5, 4, 3, 2];
    sum = (ie.substring(0, 11)).split('').reduce((acc, digit, i) => acc + parseInt(digit, 10) * weights2[i], 0);
    const dv2 = (sum % 11) % 10;
    return dv2 === parseInt(ie[11], 10);
  },

  SE: (ie) => {
    if (ie.length !== 9) return false;
    const weights = [9, 8, 7, 6, 5, 4, 3, 2];
    const sum = (ie.substring(0, 8)).split('').reduce((acc, digit, i) => acc + parseInt(digit, 10) * weights[i], 0);
    const remainder = sum % 11;
    const dv = remainder < 2 ? 0 : 11 - remainder;
    return dv === parseInt(ie[8], 10);
  },

  TO: (ie) => {
    if (ie.length !== 11) return false;
    if (!['01', '02', '03', '99'].includes(ie.substring(2, 4))) return false;
    const base = ie.substring(0, 2) + ie.substring(4, 10);
    const weights = [9, 8, 7, 6, 5, 4, 3, 2];
    const sum = base.split('').reduce((acc, digit, i) => acc + parseInt(digit, 10) * weights[i], 0);
    const remainder = sum % 11;
    const dv = remainder < 2 ? 0 : 11 - remainder;
    return dv === parseInt(ie[10], 10);
  },
};

/**
 * Valida um número de Inscrição Estadual (IE).
 *
 * É necessário fornecer a sigla da Unidade Federativa (UF) pois cada estado
 * possui um algoritmo de validação diferente.
 *
 * @param value O número da Inscrição Estadual a ser validada, com ou sem máscara.
 * @param uf A sigla da UF (ex: 'SP', 'RJ', 'BA').
 * @returns `true` se a Inscrição Estadual for válida para a UF fornecida, `false` caso contrário.
 */
export function isValidIE(value: string | number, uf: string): boolean {
  const upperUf = uf.toUpperCase();
  const validator = validators[upperUf];

  if (!validator) {
    return false;
  }

  // SP is a special case for rural producers (starts with 'P')
  if (upperUf === 'SP' && String(value).trim().toUpperCase().startsWith('P')) {
    const cleanedValue = 'P' + String(value).replace(/[^0-9]/g, '');
    return validator(cleanedValue);
  }

  const cleanedValue = clean(String(value));
  if (!/^\d+$/.test(cleanedValue)) {
    return false;
  }

  return validator(cleanedValue);
}
