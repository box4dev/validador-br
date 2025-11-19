import { clean } from '../utils/clean.js';

/**
 * Valida um número de Título de Eleitor.
 *
 * @param value O número do Título de Eleitor a ser validado, com ou sem máscara.
 * @returns `true` se o número for válido, `false` caso contrário.
 */
export function tituloEleitor(value: string | number): boolean {
  const cleanedValue = clean(value);

  if (
    cleanedValue.length !== 12 ||
    !/^\d{12}$/.test(cleanedValue) ||
    /^(\d)\1{11}$/.test(cleanedValue)
  ) {
    return false;
  }

  const base = cleanedValue.substring(0, 8);
  const uf = cleanedValue.substring(8, 10);
  const dv = cleanedValue.substring(10, 12);

  // UF (state code) must be between 01 and 28.
  const ufCode = parseInt(uf, 10);
  if (ufCode < 1 || ufCode > 28) {
    return false;
  }

  // Calculate the first verification digit (DV1)
  const weights1 = [2, 3, 4, 5, 6, 7, 8, 9];
  let sum1 = 0;
  for (let i = 0; i < 8; i++) {
    sum1 += parseInt(base[i], 10) * weights1[i];
  }
  const remainder1 = sum1 % 11;
  const calculatedDv1 = remainder1 === 10 ? 0 : remainder1;

  if (calculatedDv1 !== parseInt(dv[0], 10)) {
    return false;
  }

  // Calculate the second verification digit (DV2)
  const weights2 = [7, 8, 9];
  const sequence2 = uf + calculatedDv1;
  let sum2 = 0;
  for (let i = 0; i < 3; i++) {
    sum2 += parseInt(sequence2[i], 10) * weights2[i];
  }
  const remainder2 = sum2 % 11;
  const calculatedDv2 = remainder2 === 10 ? 0 : remainder2;

  return calculatedDv2 === parseInt(dv[1], 10);
}

