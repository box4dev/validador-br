import { clean } from '../utils/clean.js';

/**
 * Valida um número de CNS (Cartão Nacional de Saúde).
 *
 * O CNS pode ser definitivo (iniciado com 1 ou 2) ou provisório (iniciado com 7, 8 ou 9).
 * Todos os tipos usam o mesmo algoritmo de soma ponderada, conforme documentação do DATASUS.
 *
 * @param value O número do CNS a ser validado, com ou sem máscara.
 * @returns `true` se o CNS for válido, `false` caso contrário.
 */
export function cns(value: string | number): boolean {
  const cleanedValue = clean(value);

  if (cleanedValue.length !== 15) {
    return false;
  }

  const firstDigit = cleanedValue.charAt(0);

  // Validação para CNS definitivo (iniciado com 1 ou 2) e provisório (iniciado com 7, 8 ou 9)
  if (['1', '2', '7', '8', '9'].includes(firstDigit)) {
    const sum = cleanedValue
      .slice(0, 15)
      .split('')
      .reduce(
        (acc, digit, index) => acc + parseInt(digit, 10) * (15 - index),
        0,
      );
    return sum % 11 === 0;
  }

  // CNS com outros números iniciais são inválidos
  return false;
}
