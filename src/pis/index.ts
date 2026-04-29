import { clean } from '../utils/clean.js';

/**
 * Valida um número de PIS/PASEP.
 *
 * @param value O número do PIS/PASEP a ser validado, com ou sem máscara.
 * @returns `true` se o número for válido, `false` caso contrário.
 */
export function isValidPis(value: string | number): boolean {
  const cleanedValue = clean(value);

  if (
    cleanedValue.length !== 11 ||
    /^(\d)\1{10}$/.test(cleanedValue)
  ) {
    return false;
  }

  const weights = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const base = cleanedValue.substring(0, 10);

  const sum = base
    .split('')
    .reduce(
      (acc, digit, index) => acc + parseInt(digit, 10) * weights[index],
      0,
    );

  const remainder = sum % 11;
  const calculatedDigit = remainder < 2 ? 0 : 11 - remainder;

  return calculatedDigit === parseInt(cleanedValue.charAt(10), 10);
}

