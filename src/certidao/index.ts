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
export function certidao(value: string | number): boolean {
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
    const weights = [2, 3, 4, 5, 6, 7, 8, 9];
    let sum = 0;

    for (let i = 0; i < sequence.length; i++) {
      const weight = weights[(sequence.length - 1 - i) % weights.length];
      sum += parseInt(sequence[i], 10) * weight;
    }

    const remainder = sum % 11;
    // According to CNJ Provimento Nº 63/2017, it's the direct remainder. If 10, it becomes 0.
    return remainder === 10 ? 0 : remainder;
  };

  const dv1 = calculateDigit(base);
  if (dv1 !== parseInt(dv.charAt(0), 10)) {
    return false;
  }

  const dv2 = calculateDigit(base + dv1);
  return dv2 === parseInt(dv.charAt(1), 10);
}
