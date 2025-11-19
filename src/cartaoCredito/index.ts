import { clean } from '../utils/clean.js';
import { luhn } from '../utils/luhn.js';

/**
 * Valida um número de cartão de crédito.
 *
 * Esta função verifica se o número do cartão tem um formato válido (entre 13 e 19 dígitos)
 * e se passa na verificação do Algoritmo de Luhn.
 *
 * @param value O número do cartão de crédito a ser validado, com ou sem máscara.
 * @returns `true` se o número do cartão for válido, `false` caso contrário.
 */
export function cartaoCredito(value: string | number): boolean {
  const cleanedValue = clean(value);

  if (cleanedValue.length < 13 || cleanedValue.length > 19) {
    return false;
  }

  return luhn(cleanedValue);
}
