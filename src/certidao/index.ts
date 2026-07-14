import { clean } from '../utils/clean.js';

/**
 * Valida uma matrícula de certidão civil (nascimento, casamento, óbito, etc.).
 * A matrícula segue o padrão de 32 dígitos definido pelo CNJ.
 *
 * Formato: NNNNNN NN AAAA N TTTTT LLLLL DDDDDDD CC
 *
 * @param value A matrícula da certidão a ser validada, com ou sem máscara.
 * @returns `true` se a matrícula for válida, `false` caso contrário.
 */
export function isValidCertidao(value: string | number): boolean {
  const cleanedValue = clean(value);

  if (
    cleanedValue.length !== 32 ||
    !/^\d{32}$/.test(cleanedValue) ||
    /^(\d)\1{31}$/.test(cleanedValue)
  ) {
    return false;
  }

  const base = cleanedValue.substring(0, 30);
  const dv = cleanedValue.substring(30, 32);

  const calculateDigit = (sequence: string): number => {
    let sum = 0;
    let multiplier = 32 - sequence.length;

    for (let i = 0; i < sequence.length; i++) {
      const weight = multiplier;
      const digit = parseInt(sequence[i] ?? '0', 10);
      sum += digit * weight;

      multiplier += 1;
      if (multiplier > 10) {
        multiplier = 0;
      }
    }

    const remainder = sum % 11;
    return remainder > 9 ? 1 : remainder;
  };

  const dv1 = calculateDigit(base);
  const dv2 = calculateDigit(base + String(dv1));
  return dv === `${dv1}${dv2}`;
}
