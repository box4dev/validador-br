import { clean } from '../utils/clean.js';

/**
 * Valida um número de CPF.
 *
 * @param value O número de CPF a ser validado, com ou sem máscara.
 * @returns `true` se o CPF for válido, `false` caso contrário.
 */
export function cpf(value: string | number): boolean {
  const cleanedValue = clean(value);

  if (cleanedValue.length !== 11 || /^(\d)\1{10}$/.test(cleanedValue)) {
    return false;
  }

  let sum = 0;
  let remainder: number;

  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cleanedValue.substring(i - 1, i), 10) * (11 - i);
  }

  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }

  if (remainder !== parseInt(cleanedValue.substring(9, 10), 10)) {
    return false;
  }

  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cleanedValue.substring(i - 1, i), 10) * (12 - i);
  }

  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }

  return remainder === parseInt(cleanedValue.substring(10, 11), 10);
}
